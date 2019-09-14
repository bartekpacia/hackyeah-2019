import { ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector } from '@angular/core';

import { IDomChildElementConfig } from '@app/interfaces/dom.interface';

@Injectable()
export class DomService {
  private childComponentRef: any;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  private attachConfig(config, componentRef): void {
    const inputs = config.inputs;
    const outputs = config.outputs;

    if (inputs) {
      Object.keys(inputs).forEach((key: string) => {
        componentRef.instance[key] = inputs[key];
      });
    }

    if (outputs) {
      Object.keys(outputs).forEach((key: string) => {
        componentRef.instance[key] = outputs[key];
      });
    }
  }

  appendComponentTo(parentId: string, child: any, childConfig?: IDomChildElementConfig): void {
    // Create a component reference from the component
    const childComponentRef = this.componentFactoryResolver
      .resolveComponentFactory(child)
      .create(this.injector);

    // Attach the config to the child (inputs and outputs)
    if (childConfig) {
      this.attachConfig(childConfig, childComponentRef);
    }

    this.childComponentRef = childComponentRef;
    // Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(childComponentRef.hostView);

    // Get DOM element from component
    const childDomElem = (childComponentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    // Append DOM element to the body
    document.getElementById(parentId).appendChild(childDomElem);

  }

  removeComponent() {
    this.appRef.detachView(this.childComponentRef.hostView);
    this.childComponentRef.destroy();
  }
}
