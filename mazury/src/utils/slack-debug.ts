import axios from 'axios';

const debugRequest = (message: string, handler: string) => 
axios.post(
    "https://hooks.slack.com/services/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",
    { text: `
      :ear_of_rice:ENVIRONMENT: ${process.env.NODE_ENV}
      :rotating_light:ROUTE: ${handler}
      :train2: :tractor:MESSAGE: ${message}
    ` })

export default debugRequest