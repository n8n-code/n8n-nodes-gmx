import type { INodeProperties } from 'n8n-workflow';

export const yieldDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Yield"
					]
				}
			},
			"options": [
				{
					"name": "Get Gm Pools Yield Pnl",
					"value": "Get Gm Pools Yield Pnl",
					"action": "Get Gm Pools Yield Pnl",
					"description": "Fee-only APY plus trader PnL for GM pools, one row per GM market token.\nMetrics are null when the pool has no indexed data for the window; young pools are annualized over their listed window; unknown pool addresses in the pools filter are ignored.\nWindow timestamps are hour-aligned to the indexer's snapshots; responses are served from a cached snapshot — window.endTimestamp reports its freshness.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/yield/gm-pools"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /yield/gm-pools",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Yield"
					],
					"operation": [
						"Get Gm Pools Yield Pnl"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"default": "1d",
			"type": "options",
			"options": [
				{
					"name": "1 D",
					"value": "1d"
				},
				{
					"name": "7 D",
					"value": "7d"
				},
				{
					"name": "30 D",
					"value": "30d"
				},
				{
					"name": "90 D",
					"value": "90d"
				},
				{
					"name": "180 D",
					"value": "180d"
				},
				{
					"name": "1 Y",
					"value": "1y"
				},
				{
					"name": "Total",
					"value": "total"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "period",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Yield"
					],
					"operation": [
						"Get Gm Pools Yield Pnl"
					]
				}
			}
		},
		{
			"displayName": "Pools",
			"name": "pools",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "pools",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Yield"
					],
					"operation": [
						"Get Gm Pools Yield Pnl"
					]
				}
			}
		},
		{
			"displayName": "Include Components",
			"name": "includeComponents",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "includeComponents",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Yield"
					],
					"operation": [
						"Get Gm Pools Yield Pnl"
					]
				}
			}
		},
];
