import type { INodeProperties } from 'n8n-workflow';

export const paxosTransitDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Paxos Transit"
					]
				}
			},
			"options": [
				{
					"name": "Get Routes",
					"value": "Get Routes",
					"action": "Get Routes",
					"description": "Conversion routes available in Paxos Transit.\nminOrderSize differs per fee tier, pass feeTier=zeroFee for the zero fee minimums.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/paxos/transit/routes"
						}
					}
				},
				{
					"name": "Get Fee Tier",
					"value": "Get Fee Tier",
					"action": "Get Fee Tier",
					"description": "zeroFee for whitelisted addresses, standardFee for everyone else.\nzeroFeeCapacity: max USDC to USDG zero fee amount (USDG base units), refreshed every minute; 0 for standardFee.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/paxos/transit/fee-tier"
						}
					}
				},
				{
					"name": "Get Authorization",
					"value": "Get Authorization",
					"action": "Get Authorization",
					"description": "Whether the offer token needs a permit signature or an approval before the quote.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/paxos/transit/authorization"
						}
					}
				},
				{
					"name": "Get Quote",
					"value": "Get Quote",
					"action": "Get Quote",
					"description": "Signed submitOrder calldata. feeTier=zeroFee needs a whitelisted address, the USDC/USDG route on this chain and enough capacity.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/paxos/transit/orders/quote"
						}
					}
				},
				{
					"name": "Get Order",
					"value": "Get Order",
					"action": "Get Order",
					"description": "Status of one Paxos Transit order.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/paxos/transit/orders/{{$parameter[\"orderId\"]}}"
						}
					}
				},
				{
					"name": "Get Orders",
					"value": "Get Orders",
					"action": "Get Orders",
					"description": "Paxos Transit order history of a user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/paxos/transit/orders"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /paxos/transit/routes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Paxos Transit"
					],
					"operation": [
						"Get Routes"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Paxos Transit"
					],
					"operation": [
						"Get Routes"
					]
				}
			}
		},
		{
			"displayName": "Fee Tier",
			"name": "feeTier",
			"default": "zeroFee",
			"type": "options",
			"options": [
				{
					"name": "Zero Fee",
					"value": "zeroFee"
				},
				{
					"name": "Standard Fee",
					"value": "standardFee"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "feeTier",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Paxos Transit"
					],
					"operation": [
						"Get Routes"
					]
				}
			}
		},
		{
			"displayName": "GET /paxos/transit/fee-tier",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Paxos Transit"
					],
					"operation": [
						"Get Fee Tier"
					]
				}
			}
		},
		{
			"displayName": "User Address",
			"name": "userAddress",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "userAddress",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Paxos Transit"
					],
					"operation": [
						"Get Fee Tier"
					]
				}
			}
		},
		{
			"displayName": "GET /paxos/transit/authorization",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Paxos Transit"
					],
					"operation": [
						"Get Authorization"
					]
				}
			}
		},
		{
			"displayName": "User Address",
			"name": "userAddress",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "userAddress",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Paxos Transit"
					],
					"operation": [
						"Get Authorization"
					]
				}
			}
		},
		{
			"displayName": "Token Address",
			"name": "tokenAddress",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tokenAddress",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Paxos Transit"
					],
					"operation": [
						"Get Authorization"
					]
				}
			}
		},
		{
			"displayName": "Spender Address",
			"name": "spenderAddress",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "spenderAddress",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Paxos Transit"
					],
					"operation": [
						"Get Authorization"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "amount",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "amount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Paxos Transit"
					],
					"operation": [
						"Get Authorization"
					]
				}
			}
		},
		{
			"displayName": "Chain ID",
			"name": "chainId",
			"required": true,
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "chainId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Paxos Transit"
					],
					"operation": [
						"Get Authorization"
					]
				}
			}
		},
		{
			"displayName": "GET /paxos/transit/orders/quote",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Paxos Transit"
					],
					"operation": [
						"Get Quote"
					]
				}
			}
		},
		{
			"displayName": "User Address",
			"name": "userAddress",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "userAddress",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Paxos Transit"
					],
					"operation": [
						"Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Offer Asset",
			"name": "offerAsset",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "offerAsset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Paxos Transit"
					],
					"operation": [
						"Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Want Asset",
			"name": "wantAsset",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "wantAsset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Paxos Transit"
					],
					"operation": [
						"Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Offer Amount",
			"name": "offerAmount",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "offerAmount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Paxos Transit"
					],
					"operation": [
						"Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Source Chain ID",
			"name": "sourceChainId",
			"required": true,
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "sourceChainId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Paxos Transit"
					],
					"operation": [
						"Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Destination Chain ID",
			"name": "destinationChainId",
			"required": true,
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "destinationChainId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Paxos Transit"
					],
					"operation": [
						"Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Permit Signature",
			"name": "permitSignature",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "permitSignature",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Paxos Transit"
					],
					"operation": [
						"Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Permit Deadline",
			"name": "permitDeadline",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "permitDeadline",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Paxos Transit"
					],
					"operation": [
						"Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Response Format",
			"name": "responseFormat",
			"default": "encoded",
			"type": "options",
			"options": [
				{
					"name": "Encoded",
					"value": "encoded"
				},
				{
					"name": "Full",
					"value": "full"
				},
				{
					"name": "Structured",
					"value": "structured"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "responseFormat",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Paxos Transit"
					],
					"operation": [
						"Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Fee Tier",
			"name": "feeTier",
			"default": "zeroFee",
			"type": "options",
			"options": [
				{
					"name": "Zero Fee",
					"value": "zeroFee"
				},
				{
					"name": "Standard Fee",
					"value": "standardFee"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "feeTier",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Paxos Transit"
					],
					"operation": [
						"Get Quote"
					]
				}
			}
		},
		{
			"displayName": "GET /paxos/transit/orders/{orderId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Paxos Transit"
					],
					"operation": [
						"Get Order"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Paxos Transit"
					],
					"operation": [
						"Get Order"
					]
				}
			}
		},
		{
			"displayName": "GET /paxos/transit/orders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Paxos Transit"
					],
					"operation": [
						"Get Orders"
					]
				}
			}
		},
		{
			"displayName": "User Address",
			"name": "userAddress",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "userAddress",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Paxos Transit"
					],
					"operation": [
						"Get Orders"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "pageSize",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pageSize",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Paxos Transit"
					],
					"operation": [
						"Get Orders"
					]
				}
			}
		},
		{
			"displayName": "Page Token",
			"name": "pageToken",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pageToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Paxos Transit"
					],
					"operation": [
						"Get Orders"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Paxos Transit"
					],
					"operation": [
						"Get Orders"
					]
				}
			}
		},
];
