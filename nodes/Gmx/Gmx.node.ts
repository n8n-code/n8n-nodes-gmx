import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { tokensDescription } from './resources/tokens';
import { subaccountsDescription } from './resources/subaccounts';
import { stakingDescription } from './resources/staking';
import { ratesDescription } from './resources/rates';
import { pricesDescription } from './resources/prices';
import { positionsDescription } from './resources/positions';
import { performanceDescription } from './resources/performance';
import { pairsDescription } from './resources/pairs';
import { ordersDescription } from './resources/orders';
import { orderTransactionsDescription } from './resources/order-transactions';
import { marketsDescription } from './resources/markets';
import { jitDescription } from './resources/jit';
import { buybackDescription } from './resources/buyback';
import { balancesDescription } from './resources/balances';
import { apyDescription } from './resources/apy';
import { allowancesDescription } from './resources/allowances';

export class Gmx implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'gmx',
		name: 'N8nDevGmx',
		icon: { light: 'file:./gmx.svg', dark: 'file:./gmx.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'GMX decentralized perpetual exchange offering spot and leverage trading with deep liquidity on Arbitrum and Avalanche',
		defaults: { name: 'gmx' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevGmxApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Tokens",
					"value": "Tokens",
					"description": ""
				},
				{
					"name": "Subaccounts",
					"value": "Subaccounts",
					"description": ""
				},
				{
					"name": "Staking",
					"value": "Staking",
					"description": ""
				},
				{
					"name": "Rates",
					"value": "Rates",
					"description": ""
				},
				{
					"name": "Prices",
					"value": "Prices",
					"description": ""
				},
				{
					"name": "Positions",
					"value": "Positions",
					"description": ""
				},
				{
					"name": "Performance",
					"value": "Performance",
					"description": ""
				},
				{
					"name": "Pairs",
					"value": "Pairs",
					"description": ""
				},
				{
					"name": "Orders",
					"value": "Orders",
					"description": ""
				},
				{
					"name": "Order Transactions",
					"value": "Order Transactions",
					"description": ""
				},
				{
					"name": "Markets",
					"value": "Markets",
					"description": ""
				},
				{
					"name": "JIT",
					"value": "JIT",
					"description": ""
				},
				{
					"name": "Buyback",
					"value": "Buyback",
					"description": ""
				},
				{
					"name": "Balances",
					"value": "Balances",
					"description": ""
				},
				{
					"name": "APY",
					"value": "APY",
					"description": ""
				},
				{
					"name": "Allowances",
					"value": "Allowances",
					"description": ""
				}
			],
			"default": ""
		},
		...tokensDescription,
		...subaccountsDescription,
		...stakingDescription,
		...ratesDescription,
		...pricesDescription,
		...positionsDescription,
		...performanceDescription,
		...pairsDescription,
		...ordersDescription,
		...orderTransactionsDescription,
		...marketsDescription,
		...jitDescription,
		...buybackDescription,
		...balancesDescription,
		...apyDescription,
		...allowancesDescription
		],
	};
}
