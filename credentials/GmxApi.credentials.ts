import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class GmxApi implements ICredentialType {
        name = 'N8nDevGmxApi';

        displayName = 'Gmx API';

        icon: Icon = { light: 'file:../nodes/Gmx/gmx.svg', dark: 'file:../nodes/Gmx/gmx.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://arbitrum.gmxapi.io/v1',
                        required: true,
                        placeholder: 'https://arbitrum.gmxapi.io/v1',
                        description: 'The base URL of your Gmx API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
