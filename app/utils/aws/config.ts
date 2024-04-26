import { ResourcesConfig } from "aws-amplify";

const amplifyConfig: ResourcesConfig = {
    Auth: {
      Cognito: {
        userPoolClientId: '358bfgi6ffmblbitgs6a0ooi1m',
        userPoolId: 'us-east-1_0IZsUv8HN',
        }
      }
    }

export default amplifyConfig;