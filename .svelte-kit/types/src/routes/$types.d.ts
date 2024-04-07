import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type LayoutRouteId = RouteId | "/(admin)/account/(menu)" | "/(admin)/account/(menu)/billing" | "/(admin)/account/(menu)/billing/manage" | "/(admin)/account/(menu)/settings" | "/(admin)/account/(menu)/settings/change_email" | "/(admin)/account/(menu)/settings/change_password" | "/(admin)/account/(menu)/settings/delete_account" | "/(admin)/account/(menu)/settings/edit_profile" | "/(admin)/account/(menu)/settings/reset_password" | "/(admin)/account/api" | "/(admin)/account/create_profile" | "/(admin)/account/select_plan" | "/(admin)/account/sign_out" | "/(admin)/account/subscribe/[slug]" | "/(marketing)" | "/(marketing)/blog" | "/(marketing)/blog/(posts)/awesome_post" | "/(marketing)/blog/(posts)/example_blog_post" | "/(marketing)/blog/(posts)/how_we_built_our_41kb_saas_website" | "/(marketing)/contact_us" | "/(marketing)/login" | "/(marketing)/login/current_password_error" | "/(marketing)/login/forgot_password" | "/(marketing)/login/sign_in" | "/(marketing)/login/sign_up" | "/(marketing)/pricing" | null
type LayoutParams = RouteParams & { slug?: string }
type LayoutParentData = EnsureDefined<{}>;

export type LayoutServerData = null;
export type LayoutData = Expand<LayoutParentData>;