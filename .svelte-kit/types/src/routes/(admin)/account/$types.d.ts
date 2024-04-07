import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/(admin)/account';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type LayoutRouteId = RouteId | "/(admin)/account/(menu)" | "/(admin)/account/(menu)/billing" | "/(admin)/account/(menu)/billing/manage" | "/(admin)/account/(menu)/settings" | "/(admin)/account/(menu)/settings/change_email" | "/(admin)/account/(menu)/settings/change_password" | "/(admin)/account/(menu)/settings/delete_account" | "/(admin)/account/(menu)/settings/edit_profile" | "/(admin)/account/(menu)/settings/reset_password" | "/(admin)/account/api" | "/(admin)/account/create_profile" | "/(admin)/account/select_plan" | "/(admin)/account/sign_out" | "/(admin)/account/subscribe/[slug]"
type LayoutParams = RouteParams & { slug?: string }
type LayoutServerParentData = EnsureDefined<import('../../$types.js').LayoutServerData>;
type LayoutParentData = EnsureDefined<import('../../$types.js').LayoutData>;

export type LayoutServerLoad<OutputData extends Partial<App.PageData> & Record<string, any> | void = Partial<App.PageData> & Record<string, any> | void> = Kit.ServerLoad<LayoutParams, LayoutServerParentData, OutputData, LayoutRouteId>;
export type LayoutServerLoadEvent = Parameters<LayoutServerLoad>[0];
export type LayoutServerData = Expand<OptionalUnion<EnsureDefined<Kit.AwaitedProperties<Awaited<ReturnType<typeof import('./proxy+layout.server.js').load>>>>>>;
export type LayoutLoad<OutputData extends OutputDataShape<LayoutParentData> = OutputDataShape<LayoutParentData>> = Kit.Load<LayoutParams, LayoutServerData, LayoutParentData, OutputData, LayoutRouteId>;
export type LayoutLoadEvent = Parameters<LayoutLoad>[0];
export type LayoutData = Expand<Omit<LayoutParentData, keyof Kit.AwaitedProperties<Awaited<ReturnType<typeof import('../../../../../../src/routes/(admin)/account/+layout.js').load>>>> & OptionalUnion<EnsureDefined<Kit.AwaitedProperties<Awaited<ReturnType<typeof import('../../../../../../src/routes/(admin)/account/+layout.js').load>>>>>>;
export type RequestEvent = Kit.RequestEvent<RouteParams, RouteId>;