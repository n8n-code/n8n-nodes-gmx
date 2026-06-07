import type { INodeProperties } from 'n8n-workflow';

export const orderTransactionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					]
				}
			},
			"options": [
				{
					"name": "Prepare",
					"value": "Prepare",
					"action": "Prepare",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/orders/txns/prepare"
						}
					}
				},
				{
					"name": "Submit",
					"value": "Submit",
					"action": "Submit",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/orders/txns/submit"
						}
					}
				},
				{
					"name": "Status",
					"value": "Status",
					"action": "Status",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/orders/txns/status"
						}
					}
				},
				{
					"name": "Edit Prepare",
					"value": "Edit Prepare",
					"action": "Edit Prepare",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/orders/txns/edit/prepare"
						}
					}
				},
				{
					"name": "Cancel Prepare",
					"value": "Cancel Prepare",
					"action": "Cancel Prepare",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/orders/txns/cancel/prepare"
						}
					}
				},
				{
					"name": "Collateral Prepare",
					"value": "Collateral Prepare",
					"action": "Collateral Prepare",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/orders/txns/collateral/prepare"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /orders/txns/prepare",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Prepare"
					]
				}
			}
		},
		{
			"displayName": "Subaccount Approval",
			"name": "subaccountApproval",
			"type": "json",
			"default": "{}",
			"description": "Construct a type with a set of properties K of type T",
			"routing": {
				"send": {
					"property": "subaccountApproval",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Prepare"
					]
				}
			}
		},
		{
			"displayName": "Subaccount Address",
			"name": "subaccountAddress",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "subaccountAddress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Prepare"
					]
				}
			}
		},
		{
			"displayName": "From",
			"name": "from",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "from",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Prepare"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Mode",
			"name": "mode",
			"type": "options",
			"default": "express",
			"options": [
				{
					"name": "Express",
					"value": "express"
				},
				{
					"name": "Classic",
					"value": "classic"
				}
			],
			"routing": {
				"send": {
					"property": "mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Prepare"
					]
				}
			}
		},
		{
			"displayName": "Auto Cancel",
			"name": "autoCancel",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "autoCancel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Prepare"
					]
				}
			}
		},
		{
			"displayName": "Tpsl",
			"name": "tpsl",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "tpsl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Prepare"
					]
				}
			}
		},
		{
			"displayName": "Twap Config",
			"name": "twapConfig",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "twapConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Prepare"
					]
				}
			}
		},
		{
			"displayName": "Gas Payment Token",
			"name": "gasPaymentToken",
			"type": "string",
			"default": "",
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
						"Order Transactions"
					],
					"operation": [
						"Prepare"
					]
				}
			}
		},
		{
			"displayName": "Manual Swap Path",
			"name": "manualSwapPath",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "manualSwapPath",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Prepare"
					]
				}
			}
		},
		{
			"displayName": "Keep Leverage",
			"name": "keepLeverage",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "keepLeverage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Prepare"
					]
				}
			}
		},
		{
			"displayName": "Receive Token",
			"name": "receiveToken",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "receiveToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Prepare"
					]
				}
			}
		},
		{
			"displayName": "Collateral To Pay",
			"name": "collateralToPay",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "collateralToPay",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Prepare"
					]
				}
			}
		},
		{
			"displayName": "Execution Fee Buffer Bps",
			"name": "executionFeeBufferBps",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "executionFeeBufferBps",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Prepare"
					]
				}
			}
		},
		{
			"displayName": "Acceptable Price Impact Bps",
			"name": "acceptablePriceImpactBps",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "acceptablePriceImpactBps",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Prepare"
					]
				}
			}
		},
		{
			"displayName": "Slippage",
			"name": "slippage",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "slippage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Prepare"
					]
				}
			}
		},
		{
			"displayName": "Collateral Token",
			"name": "collateralToken",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "collateralToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Prepare"
					]
				}
			}
		},
		{
			"displayName": "Trigger Price",
			"name": "triggerPrice",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "triggerPrice",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Prepare"
					]
				}
			}
		},
		{
			"displayName": "Size",
			"name": "size",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "size",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Prepare"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Order Type",
			"name": "orderType",
			"type": "options",
			"default": "market",
			"options": [
				{
					"name": "Market",
					"value": "market"
				},
				{
					"name": "Limit",
					"value": "limit"
				},
				{
					"name": "Stop Market",
					"value": "stop-market"
				},
				{
					"name": "Take Profit",
					"value": "take-profit"
				},
				{
					"name": "Stop Loss",
					"value": "stop-loss"
				},
				{
					"name": "Twap",
					"value": "twap"
				}
			],
			"routing": {
				"send": {
					"property": "orderType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Prepare"
					]
				}
			}
		},
		{
			"displayName": "Direction",
			"name": "direction",
			"type": "options",
			"default": "long",
			"options": [
				{
					"name": "Long",
					"value": "long"
				},
				{
					"name": "Short",
					"value": "short"
				}
			],
			"routing": {
				"send": {
					"property": "direction",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Prepare"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "symbol",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Prepare"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Kind",
			"name": "kind",
			"type": "options",
			"default": "increase",
			"options": [
				{
					"name": "Increase",
					"value": "increase"
				},
				{
					"name": "Decrease",
					"value": "decrease"
				},
				{
					"name": "Swap",
					"value": "swap"
				}
			],
			"routing": {
				"send": {
					"property": "kind",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Prepare"
					]
				}
			}
		},
		{
			"displayName": "POST /orders/txns/submit",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Submit"
					]
				}
			}
		},
		{
			"displayName": "From",
			"name": "from",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "from",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Submit"
					]
				}
			}
		},
		{
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
						"Order Transactions"
					],
					"operation": [
						"Submit"
					]
				}
			}
		},
		{
			"displayName": "Eip 712 Data",
			"name": "eip712Data",
			"type": "json",
			"default": "{}",
			"description": "Construct a type with a set of properties K of type T",
			"routing": {
				"send": {
					"property": "eip712Data",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Submit"
					]
				}
			}
		},
		{
			"displayName": "Request Id",
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
						"Order Transactions"
					],
					"operation": [
						"Submit"
					]
				}
			}
		},
		{
			"displayName": "Mode",
			"name": "mode",
			"type": "options",
			"default": "express",
			"options": [
				{
					"name": "Express",
					"value": "express"
				},
				{
					"name": "Classic",
					"value": "classic"
				}
			],
			"routing": {
				"send": {
					"property": "mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Submit"
					]
				}
			}
		},
		{
			"displayName": "POST /orders/txns/status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Status"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Request Id",
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
						"Order Transactions"
					],
					"operation": [
						"Status"
					]
				}
			}
		},
		{
			"displayName": "POST /orders/txns/edit/prepare",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Edit Prepare"
					]
				}
			}
		},
		{
			"displayName": "Subaccount Approval",
			"name": "subaccountApproval",
			"type": "json",
			"default": "{}",
			"description": "Construct a type with a set of properties K of type T",
			"routing": {
				"send": {
					"property": "subaccountApproval",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Edit Prepare"
					]
				}
			}
		},
		{
			"displayName": "Subaccount Address",
			"name": "subaccountAddress",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "subaccountAddress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Edit Prepare"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "From",
			"name": "from",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "from",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Edit Prepare"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Mode",
			"name": "mode",
			"type": "options",
			"default": "express",
			"options": [
				{
					"name": "Express",
					"value": "express"
				},
				{
					"name": "Classic",
					"value": "classic"
				}
			],
			"routing": {
				"send": {
					"property": "mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Edit Prepare"
					]
				}
			}
		},
		{
			"displayName": "Execution Fee Top Up",
			"name": "executionFeeTopUp",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "executionFeeTopUp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Edit Prepare"
					]
				}
			}
		},
		{
			"displayName": "New Auto Cancel",
			"name": "newAutoCancel",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "newAutoCancel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Edit Prepare"
					]
				}
			}
		},
		{
			"displayName": "New Acceptable Price",
			"name": "newAcceptablePrice",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "newAcceptablePrice",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Edit Prepare"
					]
				}
			}
		},
		{
			"displayName": "New Trigger Price",
			"name": "newTriggerPrice",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "newTriggerPrice",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Edit Prepare"
					]
				}
			}
		},
		{
			"displayName": "New Size",
			"name": "newSize",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "newSize",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Edit Prepare"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Order Ids",
			"name": "orderIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Edit Prepare"
					]
				}
			}
		},
		{
			"displayName": "POST /orders/txns/cancel/prepare",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Cancel Prepare"
					]
				}
			}
		},
		{
			"displayName": "Subaccount Approval",
			"name": "subaccountApproval",
			"type": "json",
			"default": "{}",
			"description": "Construct a type with a set of properties K of type T",
			"routing": {
				"send": {
					"property": "subaccountApproval",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Cancel Prepare"
					]
				}
			}
		},
		{
			"displayName": "Subaccount Address",
			"name": "subaccountAddress",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "subaccountAddress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Cancel Prepare"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "From",
			"name": "from",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "from",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Cancel Prepare"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Mode",
			"name": "mode",
			"type": "options",
			"default": "express",
			"options": [
				{
					"name": "Express",
					"value": "express"
				},
				{
					"name": "Classic",
					"value": "classic"
				}
			],
			"routing": {
				"send": {
					"property": "mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Cancel Prepare"
					]
				}
			}
		},
		{
			"displayName": "All",
			"name": "all",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "all",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Cancel Prepare"
					]
				}
			}
		},
		{
			"displayName": "Order Ids",
			"name": "orderIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Cancel Prepare"
					]
				}
			}
		},
		{
			"displayName": "Order Id",
			"name": "orderId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "orderId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Cancel Prepare"
					]
				}
			}
		},
		{
			"displayName": "POST /orders/txns/collateral/prepare",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Collateral Prepare"
					]
				}
			}
		},
		{
			"displayName": "Subaccount Approval",
			"name": "subaccountApproval",
			"type": "json",
			"default": "{}",
			"description": "Construct a type with a set of properties K of type T",
			"routing": {
				"send": {
					"property": "subaccountApproval",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Collateral Prepare"
					]
				}
			}
		},
		{
			"displayName": "Subaccount Address",
			"name": "subaccountAddress",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "subaccountAddress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Collateral Prepare"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "From",
			"name": "from",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "from",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Collateral Prepare"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Mode",
			"name": "mode",
			"type": "options",
			"default": "express",
			"options": [
				{
					"name": "Express",
					"value": "express"
				},
				{
					"name": "Classic",
					"value": "classic"
				}
			],
			"routing": {
				"send": {
					"property": "mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Collateral Prepare"
					]
				}
			}
		},
		{
			"displayName": "Gas Payment Token",
			"name": "gasPaymentToken",
			"type": "string",
			"default": "",
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
						"Order Transactions"
					],
					"operation": [
						"Collateral Prepare"
					]
				}
			}
		},
		{
			"displayName": "Execution Fee Buffer Bps",
			"name": "executionFeeBufferBps",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "executionFeeBufferBps",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Collateral Prepare"
					]
				}
			}
		},
		{
			"displayName": "Slippage",
			"name": "slippage",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "slippage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Collateral Prepare"
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
						"Order Transactions"
					],
					"operation": [
						"Collateral Prepare"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Position Key",
			"name": "positionKey",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "positionKey",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Collateral Prepare"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"default": "deposit",
			"options": [
				{
					"name": "Deposit",
					"value": "deposit"
				},
				{
					"name": "Withdraw",
					"value": "withdraw"
				}
			],
			"routing": {
				"send": {
					"property": "operation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Transactions"
					],
					"operation": [
						"Collateral Prepare"
					]
				}
			}
		},
];
