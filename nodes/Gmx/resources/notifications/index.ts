import type { INodeProperties } from 'n8n-workflow';

export const notificationsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					]
				}
			},
			"options": [
				{
					"name": "Config",
					"value": "Config",
					"action": "Config",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/notifications/config"
						}
					}
				},
				{
					"name": "Register",
					"value": "Register",
					"action": "Register",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/notifications/register"
						}
					}
				},
				{
					"name": "Unregister",
					"value": "Unregister",
					"action": "Unregister",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/notifications/unregister"
						}
					}
				},
				{
					"name": "Test",
					"value": "Test",
					"action": "Test",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/notifications/test"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /notifications/config",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Config"
					]
				}
			}
		},
		{
			"displayName": "POST /notifications/register",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Register"
					]
				}
			}
		},
		{
			"displayName": "Signature",
			"name": "signature",
			"type": "string",
			"default": "",
			"description": "EIP-191 signature of the account owner, ERC-1271 or ERC-6492 for contract wallets. Needed only to add a device\nonce the account has 10 (`409 REGISTRATION_LIMIT_REACHED`); at 100 a signed device replaces another. Signs, joined with \"\\n\":\n`GMX Notifications Device`, `account: <checksummed account>`, `chainId: <chain id>`, `timestamp: <timestamp>`,\n`endpointHash: <SHA-256 of the UTF-8 bytes of subscription.endpoint, 64 lower-case hex characters, no 0x prefix>`.",
			"routing": {
				"send": {
					"property": "signature",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Register"
					]
				}
			}
		},
		{
			"displayName": "Timestamp",
			"name": "timestamp",
			"type": "number",
			"default": 0,
			"description": "Unix seconds the owner signed at; required with `signature`.",
			"routing": {
				"send": {
					"property": "timestamp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Register"
					]
				}
			}
		},
		{
			"displayName": "Old Endpoint",
			"name": "oldEndpoint",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "oldEndpoint",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Register"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Subscription",
			"name": "subscription",
			"type": "json",
			"default": "{\n  \"keys\": {}\n}",
			"routing": {
				"send": {
					"property": "subscription",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Register"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Account",
			"name": "account",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "account",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Register"
					]
				}
			}
		},
		{
			"displayName": "POST /notifications/unregister",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Unregister"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Endpoint",
			"name": "endpoint",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "endpoint",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Unregister"
					]
				}
			}
		},
		{
			"displayName": "POST /notifications/test",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Test"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Endpoint",
			"name": "endpoint",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "endpoint",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Test"
					]
				}
			}
		},
];
