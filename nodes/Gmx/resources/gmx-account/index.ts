import type { INodeProperties } from 'n8n-workflow';

export const gmxAccountDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"GMX Account"
					]
				}
			},
			"options": [
				{
					"name": "Prepare Cross Chain Deposit",
					"value": "Prepare Cross Chain Deposit",
					"action": "Prepare Cross Chain Deposit",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/gmx-account/deposit/cross-chain/prepare"
						}
					}
				},
				{
					"name": "Prepare Cross Chain Withdraw",
					"value": "Prepare Cross Chain Withdraw",
					"action": "Prepare Cross Chain Withdraw",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/gmx-account/withdraw/cross-chain/prepare"
						}
					}
				},
				{
					"name": "Submit Cross Chain Withdraw",
					"value": "Submit Cross Chain Withdraw",
					"action": "Submit Cross Chain Withdraw",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/gmx-account/withdraw/cross-chain/submit"
						}
					}
				},
				{
					"name": "Status Cross Chain Withdraw",
					"value": "Status Cross Chain Withdraw",
					"action": "Status Cross Chain Withdraw",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/gmx-account/withdraw/cross-chain/status"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /gmx-account/deposit/cross-chain/prepare",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"GMX Account"
					],
					"operation": [
						"Prepare Cross Chain Deposit"
					]
				}
			}
		},
		{
			"displayName": "Inner Data",
			"name": "innerData",
			"type": "string",
			"default": "",
			"description": "Optional extra payload appended to the LayerZero compose message (hex).",
			"routing": {
				"send": {
					"property": "innerData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"GMX Account"
					],
					"operation": [
						"Prepare Cross Chain Deposit"
					]
				}
			}
		},
		{
			"displayName": "Native Drop Amount",
			"name": "nativeDropAmount",
			"type": "string",
			"default": "",
			"description": "Optional native drop (gas) for the destination chain, in destination native decimals.",
			"routing": {
				"send": {
					"property": "nativeDropAmount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"GMX Account"
					],
					"operation": [
						"Prepare Cross Chain Deposit"
					]
				}
			}
		},
		{
			"displayName": "Native Fee",
			"name": "nativeFee",
			"type": "string",
			"default": "",
			"description": "Optional; when omitted, server quotes Stargate `nativeFee` on the source chain.",
			"routing": {
				"send": {
					"property": "nativeFee",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"GMX Account"
					],
					"operation": [
						"Prepare Cross Chain Deposit"
					]
				}
			}
		},
		{
			"displayName": "Compose Gas",
			"name": "composeGas",
			"type": "string",
			"default": "",
			"description": "Optional client-supplied destination compose-gas hint; bypasses server quote.",
			"routing": {
				"send": {
					"property": "composeGas",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"GMX Account"
					],
					"operation": [
						"Prepare Cross Chain Deposit"
					]
				}
			}
		},
		{
			"displayName": "Token Kind",
			"name": "tokenKind",
			"type": "options",
			"default": "trade",
			"description": "\"trade\" → `IStargate.sendToken` (default); \"platform\" → `IStargate.send`.",
			"options": [
				{
					"name": "Trade",
					"value": "trade"
				},
				{
					"name": "Platform",
					"value": "platform"
				}
			],
			"routing": {
				"send": {
					"property": "tokenKind",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"GMX Account"
					],
					"operation": [
						"Prepare Cross Chain Deposit"
					]
				}
			}
		},
		{
			"displayName": "Is Native On Source",
			"name": "isNativeOnSource",
			"type": "boolean",
			"default": true,
			"description": "Whether the source-chain token is the chain's native gas asset (ETH/BNB/etc.) —\nStargate auto-wraps it to WETH/WBNB on the source side. Optional override;\notherwise resolved from the registry.",
			"routing": {
				"send": {
					"property": "isNativeOnSource",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"GMX Account"
					],
					"operation": [
						"Prepare Cross Chain Deposit"
					]
				}
			}
		},
		{
			"displayName": "Destination Stargate Pool Address",
			"name": "destinationStargatePoolAddress",
			"type": "string",
			"default": "",
			"description": "Optional override; otherwise resolved from the registry by symbol/token.",
			"routing": {
				"send": {
					"property": "destinationStargatePoolAddress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"GMX Account"
					],
					"operation": [
						"Prepare Cross Chain Deposit"
					]
				}
			}
		},
		{
			"displayName": "Source Stargate Pool Address",
			"name": "sourceStargatePoolAddress",
			"type": "string",
			"default": "",
			"description": "Optional override; otherwise resolved from the registry by symbol/token.",
			"routing": {
				"send": {
					"property": "sourceStargatePoolAddress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"GMX Account"
					],
					"operation": [
						"Prepare Cross Chain Deposit"
					]
				}
			}
		},
		{
			"displayName": "Token Address",
			"name": "tokenAddress",
			"type": "string",
			"default": "",
			"description": "Token address on the settlement chain (alternative to `tokenSymbol`).",
			"routing": {
				"send": {
					"property": "tokenAddress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"GMX Account"
					],
					"operation": [
						"Prepare Cross Chain Deposit"
					]
				}
			}
		},
		{
			"displayName": "Token Symbol",
			"name": "tokenSymbol",
			"type": "string",
			"default": "",
			"description": "Token identifier. Provide one of:\n - `tokenSymbol` (e.g. \"USDC\" | \"USDT\" | \"ETH\"), or\n - `tokenAddress` on the settlement chain.\nStargate pool addresses and source-side `isNativeOnSource` are resolved server-side.",
			"routing": {
				"send": {
					"property": "tokenSymbol",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"GMX Account"
					],
					"operation": [
						"Prepare Cross Chain Deposit"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Amount",
			"name": "amount",
			"type": "string",
			"default": "",
			"description": "Amount in token-native decimals as a base-10 string.",
			"routing": {
				"send": {
					"property": "amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"GMX Account"
					],
					"operation": [
						"Prepare Cross Chain Deposit"
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
			"description": "GMX account that will receive the deposit on the settlement chain.",
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
						"GMX Account"
					],
					"operation": [
						"Prepare Cross Chain Deposit"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Src Chain ID",
			"name": "srcChainId",
			"type": "number",
			"default": 0,
			"description": "Source chain id (where the user holds funds and signs the bridge tx).",
			"routing": {
				"send": {
					"property": "srcChainId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"GMX Account"
					],
					"operation": [
						"Prepare Cross Chain Deposit"
					]
				}
			}
		},
		{
			"displayName": "POST /gmx-account/withdraw/cross-chain/prepare",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"GMX Account"
					],
					"operation": [
						"Prepare Cross Chain Withdraw"
					]
				}
			}
		},
		{
			"displayName": "Gas Payment Token",
			"name": "gasPaymentToken",
			"type": "string",
			"default": "",
			"description": "Optional ERC-20 token to pay relayer fee in. Defaults to chain's gas-payment token.",
			"routing": {
				"send": {
					"property": "gasPaymentToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"GMX Account"
					],
					"operation": [
						"Prepare Cross Chain Withdraw"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Bridge Out Params",
			"name": "bridgeOutParams",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "bridgeOutParams",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"GMX Account"
					],
					"operation": [
						"Prepare Cross Chain Withdraw"
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
						"GMX Account"
					],
					"operation": [
						"Prepare Cross Chain Withdraw"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Src Chain ID",
			"name": "srcChainId",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "srcChainId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"GMX Account"
					],
					"operation": [
						"Prepare Cross Chain Withdraw"
					]
				}
			}
		},
		{
			"displayName": "POST /gmx-account/withdraw/cross-chain/submit",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"GMX Account"
					],
					"operation": [
						"Submit Cross Chain Withdraw"
					]
				}
			}
		},
		{
			"displayName": "Request ID",
			"name": "requestId",
			"type": "string",
			"default": "",
			"description": "Echo back the requestId from /prepare to link prepare→submit→status.",
			"routing": {
				"send": {
					"property": "requestId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"GMX Account"
					],
					"operation": [
						"Submit Cross Chain Withdraw"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Relayer Fee Amount",
			"name": "relayerFeeAmount",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "relayerFeeAmount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"GMX Account"
					],
					"operation": [
						"Submit Cross Chain Withdraw"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Relayer Fee Token Address",
			"name": "relayerFeeTokenAddress",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "relayerFeeTokenAddress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"GMX Account"
					],
					"operation": [
						"Submit Cross Chain Withdraw"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Relay Params Payload",
			"name": "relayParamsPayload",
			"type": "json",
			"default": "{}",
			"description": "Construct a type with a set of properties K of type T",
			"routing": {
				"send": {
					"property": "relayParamsPayload",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"GMX Account"
					],
					"operation": [
						"Submit Cross Chain Withdraw"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Bridge Out Params",
			"name": "bridgeOutParams",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "bridgeOutParams",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"GMX Account"
					],
					"operation": [
						"Submit Cross Chain Withdraw"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Signature",
			"name": "signature",
			"type": "string",
			"default": "",
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
						"GMX Account"
					],
					"operation": [
						"Submit Cross Chain Withdraw"
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
						"GMX Account"
					],
					"operation": [
						"Submit Cross Chain Withdraw"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Src Chain ID",
			"name": "srcChainId",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "srcChainId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"GMX Account"
					],
					"operation": [
						"Submit Cross Chain Withdraw"
					]
				}
			}
		},
		{
			"displayName": "POST /gmx-account/withdraw/cross-chain/status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"GMX Account"
					],
					"operation": [
						"Status Cross Chain Withdraw"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Request ID",
			"name": "requestId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "requestId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"GMX Account"
					],
					"operation": [
						"Status Cross Chain Withdraw"
					]
				}
			}
		},
];
