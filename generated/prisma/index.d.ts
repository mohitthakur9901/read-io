
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Book
 * 
 */
export type Book = $Result.DefaultSelection<Prisma.$BookPayload>
/**
 * Model Chapter
 * 
 */
export type Chapter = $Result.DefaultSelection<Prisma.$ChapterPayload>
/**
 * Model Section
 * 
 */
export type Section = $Result.DefaultSelection<Prisma.$SectionPayload>
/**
 * Model ContentChunk
 * 
 */
export type ContentChunk = $Result.DefaultSelection<Prisma.$ContentChunkPayload>
/**
 * Model ReadingProgress
 * 
 */
export type ReadingProgress = $Result.DefaultSelection<Prisma.$ReadingProgressPayload>
/**
 * Model Highlight
 * 
 */
export type Highlight = $Result.DefaultSelection<Prisma.$HighlightPayload>
/**
 * Model Note
 * 
 */
export type Note = $Result.DefaultSelection<Prisma.$NotePayload>
/**
 * Model Conversation
 * 
 */
export type Conversation = $Result.DefaultSelection<Prisma.$ConversationPayload>
/**
 * Model UserConcept
 * 
 */
export type UserConcept = $Result.DefaultSelection<Prisma.$UserConceptPayload>
/**
 * Model BookConcept
 * 
 */
export type BookConcept = $Result.DefaultSelection<Prisma.$BookConceptPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const BookFileType: {
  PDF: 'PDF',
  EPUB: 'EPUB'
};

export type BookFileType = (typeof BookFileType)[keyof typeof BookFileType]

}

export type BookFileType = $Enums.BookFileType

export const BookFileType: typeof $Enums.BookFileType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.book`: Exposes CRUD operations for the **Book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.BookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chapter`: Exposes CRUD operations for the **Chapter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chapters
    * const chapters = await prisma.chapter.findMany()
    * ```
    */
  get chapter(): Prisma.ChapterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.section`: Exposes CRUD operations for the **Section** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sections
    * const sections = await prisma.section.findMany()
    * ```
    */
  get section(): Prisma.SectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contentChunk`: Exposes CRUD operations for the **ContentChunk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContentChunks
    * const contentChunks = await prisma.contentChunk.findMany()
    * ```
    */
  get contentChunk(): Prisma.ContentChunkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.readingProgress`: Exposes CRUD operations for the **ReadingProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReadingProgresses
    * const readingProgresses = await prisma.readingProgress.findMany()
    * ```
    */
  get readingProgress(): Prisma.ReadingProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.highlight`: Exposes CRUD operations for the **Highlight** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Highlights
    * const highlights = await prisma.highlight.findMany()
    * ```
    */
  get highlight(): Prisma.HighlightDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.note`: Exposes CRUD operations for the **Note** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.note.findMany()
    * ```
    */
  get note(): Prisma.NoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversation`: Exposes CRUD operations for the **Conversation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversation.findMany()
    * ```
    */
  get conversation(): Prisma.ConversationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userConcept`: Exposes CRUD operations for the **UserConcept** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserConcepts
    * const userConcepts = await prisma.userConcept.findMany()
    * ```
    */
  get userConcept(): Prisma.UserConceptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookConcept`: Exposes CRUD operations for the **BookConcept** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookConcepts
    * const bookConcepts = await prisma.bookConcept.findMany()
    * ```
    */
  get bookConcept(): Prisma.BookConceptDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Book: 'Book',
    Chapter: 'Chapter',
    Section: 'Section',
    ContentChunk: 'ContentChunk',
    ReadingProgress: 'ReadingProgress',
    Highlight: 'Highlight',
    Note: 'Note',
    Conversation: 'Conversation',
    UserConcept: 'UserConcept',
    BookConcept: 'BookConcept'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "book" | "chapter" | "section" | "contentChunk" | "readingProgress" | "highlight" | "note" | "conversation" | "userConcept" | "bookConcept"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Book: {
        payload: Prisma.$BookPayload<ExtArgs>
        fields: Prisma.BookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findFirst: {
            args: Prisma.BookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findMany: {
            args: Prisma.BookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          create: {
            args: Prisma.BookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          createMany: {
            args: Prisma.BookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          delete: {
            args: Prisma.BookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          update: {
            args: Prisma.BookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          deleteMany: {
            args: Prisma.BookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          upsert: {
            args: Prisma.BookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.BookGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookCountArgs<ExtArgs>
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      Chapter: {
        payload: Prisma.$ChapterPayload<ExtArgs>
        fields: Prisma.ChapterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChapterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChapterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          findFirst: {
            args: Prisma.ChapterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChapterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          findMany: {
            args: Prisma.ChapterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>[]
          }
          create: {
            args: Prisma.ChapterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          createMany: {
            args: Prisma.ChapterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChapterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>[]
          }
          delete: {
            args: Prisma.ChapterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          update: {
            args: Prisma.ChapterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          deleteMany: {
            args: Prisma.ChapterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChapterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChapterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>[]
          }
          upsert: {
            args: Prisma.ChapterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          aggregate: {
            args: Prisma.ChapterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChapter>
          }
          groupBy: {
            args: Prisma.ChapterGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChapterGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChapterCountArgs<ExtArgs>
            result: $Utils.Optional<ChapterCountAggregateOutputType> | number
          }
        }
      }
      Section: {
        payload: Prisma.$SectionPayload<ExtArgs>
        fields: Prisma.SectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findFirst: {
            args: Prisma.SectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findMany: {
            args: Prisma.SectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          create: {
            args: Prisma.SectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          createMany: {
            args: Prisma.SectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          delete: {
            args: Prisma.SectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          update: {
            args: Prisma.SectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          deleteMany: {
            args: Prisma.SectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          upsert: {
            args: Prisma.SectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          aggregate: {
            args: Prisma.SectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSection>
          }
          groupBy: {
            args: Prisma.SectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SectionCountArgs<ExtArgs>
            result: $Utils.Optional<SectionCountAggregateOutputType> | number
          }
        }
      }
      ContentChunk: {
        payload: Prisma.$ContentChunkPayload<ExtArgs>
        fields: Prisma.ContentChunkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentChunkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentChunkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentChunkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentChunkPayload>
          }
          findFirst: {
            args: Prisma.ContentChunkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentChunkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentChunkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentChunkPayload>
          }
          findMany: {
            args: Prisma.ContentChunkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentChunkPayload>[]
          }
          create: {
            args: Prisma.ContentChunkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentChunkPayload>
          }
          createMany: {
            args: Prisma.ContentChunkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContentChunkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentChunkPayload>[]
          }
          delete: {
            args: Prisma.ContentChunkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentChunkPayload>
          }
          update: {
            args: Prisma.ContentChunkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentChunkPayload>
          }
          deleteMany: {
            args: Prisma.ContentChunkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentChunkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContentChunkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentChunkPayload>[]
          }
          upsert: {
            args: Prisma.ContentChunkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentChunkPayload>
          }
          aggregate: {
            args: Prisma.ContentChunkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContentChunk>
          }
          groupBy: {
            args: Prisma.ContentChunkGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentChunkGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContentChunkCountArgs<ExtArgs>
            result: $Utils.Optional<ContentChunkCountAggregateOutputType> | number
          }
        }
      }
      ReadingProgress: {
        payload: Prisma.$ReadingProgressPayload<ExtArgs>
        fields: Prisma.ReadingProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReadingProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReadingProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingProgressPayload>
          }
          findFirst: {
            args: Prisma.ReadingProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReadingProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingProgressPayload>
          }
          findMany: {
            args: Prisma.ReadingProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingProgressPayload>[]
          }
          create: {
            args: Prisma.ReadingProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingProgressPayload>
          }
          createMany: {
            args: Prisma.ReadingProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReadingProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingProgressPayload>[]
          }
          delete: {
            args: Prisma.ReadingProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingProgressPayload>
          }
          update: {
            args: Prisma.ReadingProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingProgressPayload>
          }
          deleteMany: {
            args: Prisma.ReadingProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReadingProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReadingProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingProgressPayload>[]
          }
          upsert: {
            args: Prisma.ReadingProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingProgressPayload>
          }
          aggregate: {
            args: Prisma.ReadingProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReadingProgress>
          }
          groupBy: {
            args: Prisma.ReadingProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReadingProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReadingProgressCountArgs<ExtArgs>
            result: $Utils.Optional<ReadingProgressCountAggregateOutputType> | number
          }
        }
      }
      Highlight: {
        payload: Prisma.$HighlightPayload<ExtArgs>
        fields: Prisma.HighlightFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HighlightFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HighlightFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>
          }
          findFirst: {
            args: Prisma.HighlightFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HighlightFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>
          }
          findMany: {
            args: Prisma.HighlightFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>[]
          }
          create: {
            args: Prisma.HighlightCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>
          }
          createMany: {
            args: Prisma.HighlightCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HighlightCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>[]
          }
          delete: {
            args: Prisma.HighlightDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>
          }
          update: {
            args: Prisma.HighlightUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>
          }
          deleteMany: {
            args: Prisma.HighlightDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HighlightUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HighlightUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>[]
          }
          upsert: {
            args: Prisma.HighlightUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>
          }
          aggregate: {
            args: Prisma.HighlightAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHighlight>
          }
          groupBy: {
            args: Prisma.HighlightGroupByArgs<ExtArgs>
            result: $Utils.Optional<HighlightGroupByOutputType>[]
          }
          count: {
            args: Prisma.HighlightCountArgs<ExtArgs>
            result: $Utils.Optional<HighlightCountAggregateOutputType> | number
          }
        }
      }
      Note: {
        payload: Prisma.$NotePayload<ExtArgs>
        fields: Prisma.NoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findFirst: {
            args: Prisma.NoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findMany: {
            args: Prisma.NoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          create: {
            args: Prisma.NoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          createMany: {
            args: Prisma.NoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          delete: {
            args: Prisma.NoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          update: {
            args: Prisma.NoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          deleteMany: {
            args: Prisma.NoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          upsert: {
            args: Prisma.NoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          aggregate: {
            args: Prisma.NoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNote>
          }
          groupBy: {
            args: Prisma.NoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoteCountArgs<ExtArgs>
            result: $Utils.Optional<NoteCountAggregateOutputType> | number
          }
        }
      }
      Conversation: {
        payload: Prisma.$ConversationPayload<ExtArgs>
        fields: Prisma.ConversationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findFirst: {
            args: Prisma.ConversationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findMany: {
            args: Prisma.ConversationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          create: {
            args: Prisma.ConversationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          createMany: {
            args: Prisma.ConversationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConversationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          delete: {
            args: Prisma.ConversationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          update: {
            args: Prisma.ConversationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          deleteMany: {
            args: Prisma.ConversationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConversationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          upsert: {
            args: Prisma.ConversationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          aggregate: {
            args: Prisma.ConversationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversation>
          }
          groupBy: {
            args: Prisma.ConversationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversationCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationCountAggregateOutputType> | number
          }
        }
      }
      UserConcept: {
        payload: Prisma.$UserConceptPayload<ExtArgs>
        fields: Prisma.UserConceptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserConceptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserConceptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserConceptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserConceptPayload>
          }
          findFirst: {
            args: Prisma.UserConceptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserConceptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserConceptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserConceptPayload>
          }
          findMany: {
            args: Prisma.UserConceptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserConceptPayload>[]
          }
          create: {
            args: Prisma.UserConceptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserConceptPayload>
          }
          createMany: {
            args: Prisma.UserConceptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserConceptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserConceptPayload>[]
          }
          delete: {
            args: Prisma.UserConceptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserConceptPayload>
          }
          update: {
            args: Prisma.UserConceptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserConceptPayload>
          }
          deleteMany: {
            args: Prisma.UserConceptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserConceptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserConceptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserConceptPayload>[]
          }
          upsert: {
            args: Prisma.UserConceptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserConceptPayload>
          }
          aggregate: {
            args: Prisma.UserConceptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserConcept>
          }
          groupBy: {
            args: Prisma.UserConceptGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserConceptGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserConceptCountArgs<ExtArgs>
            result: $Utils.Optional<UserConceptCountAggregateOutputType> | number
          }
        }
      }
      BookConcept: {
        payload: Prisma.$BookConceptPayload<ExtArgs>
        fields: Prisma.BookConceptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookConceptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookConceptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookConceptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookConceptPayload>
          }
          findFirst: {
            args: Prisma.BookConceptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookConceptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookConceptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookConceptPayload>
          }
          findMany: {
            args: Prisma.BookConceptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookConceptPayload>[]
          }
          create: {
            args: Prisma.BookConceptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookConceptPayload>
          }
          createMany: {
            args: Prisma.BookConceptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookConceptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookConceptPayload>[]
          }
          delete: {
            args: Prisma.BookConceptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookConceptPayload>
          }
          update: {
            args: Prisma.BookConceptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookConceptPayload>
          }
          deleteMany: {
            args: Prisma.BookConceptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookConceptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookConceptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookConceptPayload>[]
          }
          upsert: {
            args: Prisma.BookConceptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookConceptPayload>
          }
          aggregate: {
            args: Prisma.BookConceptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookConcept>
          }
          groupBy: {
            args: Prisma.BookConceptGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookConceptGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookConceptCountArgs<ExtArgs>
            result: $Utils.Optional<BookConceptCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    book?: BookOmit
    chapter?: ChapterOmit
    section?: SectionOmit
    contentChunk?: ContentChunkOmit
    readingProgress?: ReadingProgressOmit
    highlight?: HighlightOmit
    note?: NoteOmit
    conversation?: ConversationOmit
    userConcept?: UserConceptOmit
    bookConcept?: BookConceptOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    books: number
    readingProgress: number
    highlights: number
    notes: number
    conversations: number
    userConcepts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | UserCountOutputTypeCountBooksArgs
    readingProgress?: boolean | UserCountOutputTypeCountReadingProgressArgs
    highlights?: boolean | UserCountOutputTypeCountHighlightsArgs
    notes?: boolean | UserCountOutputTypeCountNotesArgs
    conversations?: boolean | UserCountOutputTypeCountConversationsArgs
    userConcepts?: boolean | UserCountOutputTypeCountUserConceptsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReadingProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReadingProgressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHighlightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HighlightWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserConceptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserConceptWhereInput
  }


  /**
   * Count Type BookCountOutputType
   */

  export type BookCountOutputType = {
    chapters: number
    highlights: number
    notes: number
    chunks: number
    bookConcepts: number
    conversations: number
  }

  export type BookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapters?: boolean | BookCountOutputTypeCountChaptersArgs
    highlights?: boolean | BookCountOutputTypeCountHighlightsArgs
    notes?: boolean | BookCountOutputTypeCountNotesArgs
    chunks?: boolean | BookCountOutputTypeCountChunksArgs
    bookConcepts?: boolean | BookCountOutputTypeCountBookConceptsArgs
    conversations?: boolean | BookCountOutputTypeCountConversationsArgs
  }

  // Custom InputTypes
  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: BookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountChaptersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChapterWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountHighlightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HighlightWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountChunksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentChunkWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountBookConceptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookConceptWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
  }


  /**
   * Count Type ChapterCountOutputType
   */

  export type ChapterCountOutputType = {
    sections: number
  }

  export type ChapterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | ChapterCountOutputTypeCountSectionsArgs
  }

  // Custom InputTypes
  /**
   * ChapterCountOutputType without action
   */
  export type ChapterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterCountOutputType
     */
    select?: ChapterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChapterCountOutputType without action
   */
  export type ChapterCountOutputTypeCountSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
  }


  /**
   * Count Type SectionCountOutputType
   */

  export type SectionCountOutputType = {
    chunks: number
  }

  export type SectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chunks?: boolean | SectionCountOutputTypeCountChunksArgs
  }

  // Custom InputTypes
  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionCountOutputType
     */
    select?: SectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeCountChunksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentChunkWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    books?: boolean | User$booksArgs<ExtArgs>
    readingProgress?: boolean | User$readingProgressArgs<ExtArgs>
    highlights?: boolean | User$highlightsArgs<ExtArgs>
    notes?: boolean | User$notesArgs<ExtArgs>
    conversations?: boolean | User$conversationsArgs<ExtArgs>
    userConcepts?: boolean | User$userConceptsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | User$booksArgs<ExtArgs>
    readingProgress?: boolean | User$readingProgressArgs<ExtArgs>
    highlights?: boolean | User$highlightsArgs<ExtArgs>
    notes?: boolean | User$notesArgs<ExtArgs>
    conversations?: boolean | User$conversationsArgs<ExtArgs>
    userConcepts?: boolean | User$userConceptsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      books: Prisma.$BookPayload<ExtArgs>[]
      readingProgress: Prisma.$ReadingProgressPayload<ExtArgs>[]
      highlights: Prisma.$HighlightPayload<ExtArgs>[]
      notes: Prisma.$NotePayload<ExtArgs>[]
      conversations: Prisma.$ConversationPayload<ExtArgs>[]
      userConcepts: Prisma.$UserConceptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    books<T extends User$booksArgs<ExtArgs> = {}>(args?: Subset<T, User$booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    readingProgress<T extends User$readingProgressArgs<ExtArgs> = {}>(args?: Subset<T, User$readingProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadingProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    highlights<T extends User$highlightsArgs<ExtArgs> = {}>(args?: Subset<T, User$highlightsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notes<T extends User$notesArgs<ExtArgs> = {}>(args?: Subset<T, User$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversations<T extends User$conversationsArgs<ExtArgs> = {}>(args?: Subset<T, User$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userConcepts<T extends User$userConceptsArgs<ExtArgs> = {}>(args?: Subset<T, User$userConceptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserConceptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.books
   */
  export type User$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    where?: BookWhereInput
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    cursor?: BookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * User.readingProgress
   */
  export type User$readingProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingProgress
     */
    select?: ReadingProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingProgress
     */
    omit?: ReadingProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingProgressInclude<ExtArgs> | null
    where?: ReadingProgressWhereInput
    orderBy?: ReadingProgressOrderByWithRelationInput | ReadingProgressOrderByWithRelationInput[]
    cursor?: ReadingProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReadingProgressScalarFieldEnum | ReadingProgressScalarFieldEnum[]
  }

  /**
   * User.highlights
   */
  export type User$highlightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    where?: HighlightWhereInput
    orderBy?: HighlightOrderByWithRelationInput | HighlightOrderByWithRelationInput[]
    cursor?: HighlightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HighlightScalarFieldEnum | HighlightScalarFieldEnum[]
  }

  /**
   * User.notes
   */
  export type User$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    cursor?: NoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * User.conversations
   */
  export type User$conversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    cursor?: ConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * User.userConcepts
   */
  export type User$userConceptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserConcept
     */
    select?: UserConceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserConcept
     */
    omit?: UserConceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConceptInclude<ExtArgs> | null
    where?: UserConceptWhereInput
    orderBy?: UserConceptOrderByWithRelationInput | UserConceptOrderByWithRelationInput[]
    cursor?: UserConceptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserConceptScalarFieldEnum | UserConceptScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookAvgAggregateOutputType = {
    totalPages: number | null
  }

  export type BookSumAggregateOutputType = {
    totalPages: number | null
  }

  export type BookMinAggregateOutputType = {
    id: string | null
    title: string | null
    author: string | null
    description: string | null
    coverUrl: string | null
    fileUrl: string | null
    fileType: $Enums.BookFileType | null
    totalPages: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type BookMaxAggregateOutputType = {
    id: string | null
    title: string | null
    author: string | null
    description: string | null
    coverUrl: string | null
    fileUrl: string | null
    fileType: $Enums.BookFileType | null
    totalPages: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type BookCountAggregateOutputType = {
    id: number
    title: number
    author: number
    description: number
    coverUrl: number
    fileUrl: number
    fileType: number
    totalPages: number
    metadata: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type BookAvgAggregateInputType = {
    totalPages?: true
  }

  export type BookSumAggregateInputType = {
    totalPages?: true
  }

  export type BookMinAggregateInputType = {
    id?: true
    title?: true
    author?: true
    description?: true
    coverUrl?: true
    fileUrl?: true
    fileType?: true
    totalPages?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type BookMaxAggregateInputType = {
    id?: true
    title?: true
    author?: true
    description?: true
    coverUrl?: true
    fileUrl?: true
    fileType?: true
    totalPages?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type BookCountAggregateInputType = {
    id?: true
    title?: true
    author?: true
    description?: true
    coverUrl?: true
    fileUrl?: true
    fileType?: true
    totalPages?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book to aggregate.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type BookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
    orderBy?: BookOrderByWithAggregationInput | BookOrderByWithAggregationInput[]
    by: BookScalarFieldEnum[] | BookScalarFieldEnum
    having?: BookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _avg?: BookAvgAggregateInputType
    _sum?: BookSumAggregateInputType
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }

  export type BookGroupByOutputType = {
    id: string
    title: string
    author: string | null
    description: string | null
    coverUrl: string | null
    fileUrl: string | null
    fileType: $Enums.BookFileType
    totalPages: number | null
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends BookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type BookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    description?: boolean
    coverUrl?: boolean
    fileUrl?: boolean
    fileType?: boolean
    totalPages?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chapters?: boolean | Book$chaptersArgs<ExtArgs>
    readingProgress?: boolean | Book$readingProgressArgs<ExtArgs>
    highlights?: boolean | Book$highlightsArgs<ExtArgs>
    notes?: boolean | Book$notesArgs<ExtArgs>
    chunks?: boolean | Book$chunksArgs<ExtArgs>
    bookConcepts?: boolean | Book$bookConceptsArgs<ExtArgs>
    conversations?: boolean | Book$conversationsArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    description?: boolean
    coverUrl?: boolean
    fileUrl?: boolean
    fileType?: boolean
    totalPages?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    description?: boolean
    coverUrl?: boolean
    fileUrl?: boolean
    fileType?: boolean
    totalPages?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectScalar = {
    id?: boolean
    title?: boolean
    author?: boolean
    description?: boolean
    coverUrl?: boolean
    fileUrl?: boolean
    fileType?: boolean
    totalPages?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type BookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "author" | "description" | "coverUrl" | "fileUrl" | "fileType" | "totalPages" | "metadata" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["book"]>
  export type BookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chapters?: boolean | Book$chaptersArgs<ExtArgs>
    readingProgress?: boolean | Book$readingProgressArgs<ExtArgs>
    highlights?: boolean | Book$highlightsArgs<ExtArgs>
    notes?: boolean | Book$notesArgs<ExtArgs>
    chunks?: boolean | Book$chunksArgs<ExtArgs>
    bookConcepts?: boolean | Book$bookConceptsArgs<ExtArgs>
    conversations?: boolean | Book$conversationsArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Book"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      chapters: Prisma.$ChapterPayload<ExtArgs>[]
      readingProgress: Prisma.$ReadingProgressPayload<ExtArgs> | null
      highlights: Prisma.$HighlightPayload<ExtArgs>[]
      notes: Prisma.$NotePayload<ExtArgs>[]
      chunks: Prisma.$ContentChunkPayload<ExtArgs>[]
      bookConcepts: Prisma.$BookConceptPayload<ExtArgs>[]
      conversations: Prisma.$ConversationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      author: string | null
      description: string | null
      coverUrl: string | null
      fileUrl: string | null
      fileType: $Enums.BookFileType
      totalPages: number | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["book"]>
    composites: {}
  }

  type BookGetPayload<S extends boolean | null | undefined | BookDefaultArgs> = $Result.GetResult<Prisma.$BookPayload, S>

  type BookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface BookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Book'], meta: { name: 'Book' } }
    /**
     * Find zero or one Book that matches the filter.
     * @param {BookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookFindUniqueArgs>(args: SelectSubset<T, BookFindUniqueArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(args: SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookFindFirstArgs>(args?: SelectSubset<T, BookFindFirstArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(args?: SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookWithIdOnly = await prisma.book.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookFindManyArgs>(args?: SelectSubset<T, BookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Book.
     * @param {BookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
     */
    create<T extends BookCreateArgs>(args: SelectSubset<T, BookCreateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books.
     * @param {BookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookCreateManyArgs>(args?: SelectSubset<T, BookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Books and returns the data saved in the database.
     * @param {BookCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookCreateManyAndReturnArgs>(args?: SelectSubset<T, BookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Book.
     * @param {BookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
     */
    delete<T extends BookDeleteArgs>(args: SelectSubset<T, BookDeleteArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Book.
     * @param {BookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookUpdateArgs>(args: SelectSubset<T, BookUpdateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books.
     * @param {BookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookDeleteManyArgs>(args?: SelectSubset<T, BookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookUpdateManyArgs>(args: SelectSubset<T, BookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books and returns the data updated in the database.
     * @param {BookUpdateManyAndReturnArgs} args - Arguments to update many Books.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookUpdateManyAndReturnArgs>(args: SelectSubset<T, BookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Book.
     * @param {BookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends BookUpsertArgs>(args: SelectSubset<T, BookUpsertArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BookCountArgs>(
      args?: Subset<T, BookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookGroupByArgs['orderBy'] }
        : { orderBy?: BookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Book model
   */
  readonly fields: BookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chapters<T extends Book$chaptersArgs<ExtArgs> = {}>(args?: Subset<T, Book$chaptersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    readingProgress<T extends Book$readingProgressArgs<ExtArgs> = {}>(args?: Subset<T, Book$readingProgressArgs<ExtArgs>>): Prisma__ReadingProgressClient<$Result.GetResult<Prisma.$ReadingProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    highlights<T extends Book$highlightsArgs<ExtArgs> = {}>(args?: Subset<T, Book$highlightsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notes<T extends Book$notesArgs<ExtArgs> = {}>(args?: Subset<T, Book$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chunks<T extends Book$chunksArgs<ExtArgs> = {}>(args?: Subset<T, Book$chunksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentChunkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookConcepts<T extends Book$bookConceptsArgs<ExtArgs> = {}>(args?: Subset<T, Book$bookConceptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookConceptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversations<T extends Book$conversationsArgs<ExtArgs> = {}>(args?: Subset<T, Book$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Book model
   */
  interface BookFieldRefs {
    readonly id: FieldRef<"Book", 'String'>
    readonly title: FieldRef<"Book", 'String'>
    readonly author: FieldRef<"Book", 'String'>
    readonly description: FieldRef<"Book", 'String'>
    readonly coverUrl: FieldRef<"Book", 'String'>
    readonly fileUrl: FieldRef<"Book", 'String'>
    readonly fileType: FieldRef<"Book", 'BookFileType'>
    readonly totalPages: FieldRef<"Book", 'Int'>
    readonly metadata: FieldRef<"Book", 'Json'>
    readonly createdAt: FieldRef<"Book", 'DateTime'>
    readonly updatedAt: FieldRef<"Book", 'DateTime'>
    readonly userId: FieldRef<"Book", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Book findUnique
   */
  export type BookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findUniqueOrThrow
   */
  export type BookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findFirst
   */
  export type BookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findFirstOrThrow
   */
  export type BookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findMany
   */
  export type BookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book create
   */
  export type BookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to create a Book.
     */
    data: XOR<BookCreateInput, BookUncheckedCreateInput>
  }

  /**
   * Book createMany
   */
  export type BookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book createManyAndReturn
   */
  export type BookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Book update
   */
  export type BookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to update a Book.
     */
    data: XOR<BookUpdateInput, BookUncheckedUpdateInput>
    /**
     * Choose, which Book to update.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book updateMany
   */
  export type BookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Book updateManyAndReturn
   */
  export type BookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Book upsert
   */
  export type BookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The filter to search for the Book to update in case it exists.
     */
    where: BookWhereUniqueInput
    /**
     * In case the Book found by the `where` argument doesn't exist, create a new Book with this data.
     */
    create: XOR<BookCreateInput, BookUncheckedCreateInput>
    /**
     * In case the Book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookUpdateInput, BookUncheckedUpdateInput>
  }

  /**
   * Book delete
   */
  export type BookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter which Book to delete.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book deleteMany
   */
  export type BookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to delete
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to delete.
     */
    limit?: number
  }

  /**
   * Book.chapters
   */
  export type Book$chaptersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    where?: ChapterWhereInput
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    cursor?: ChapterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Book.readingProgress
   */
  export type Book$readingProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingProgress
     */
    select?: ReadingProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingProgress
     */
    omit?: ReadingProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingProgressInclude<ExtArgs> | null
    where?: ReadingProgressWhereInput
  }

  /**
   * Book.highlights
   */
  export type Book$highlightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    where?: HighlightWhereInput
    orderBy?: HighlightOrderByWithRelationInput | HighlightOrderByWithRelationInput[]
    cursor?: HighlightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HighlightScalarFieldEnum | HighlightScalarFieldEnum[]
  }

  /**
   * Book.notes
   */
  export type Book$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    cursor?: NoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Book.chunks
   */
  export type Book$chunksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentChunk
     */
    select?: ContentChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentChunk
     */
    omit?: ContentChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentChunkInclude<ExtArgs> | null
    where?: ContentChunkWhereInput
    orderBy?: ContentChunkOrderByWithRelationInput | ContentChunkOrderByWithRelationInput[]
    cursor?: ContentChunkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentChunkScalarFieldEnum | ContentChunkScalarFieldEnum[]
  }

  /**
   * Book.bookConcepts
   */
  export type Book$bookConceptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookConcept
     */
    select?: BookConceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookConcept
     */
    omit?: BookConceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookConceptInclude<ExtArgs> | null
    where?: BookConceptWhereInput
    orderBy?: BookConceptOrderByWithRelationInput | BookConceptOrderByWithRelationInput[]
    cursor?: BookConceptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookConceptScalarFieldEnum | BookConceptScalarFieldEnum[]
  }

  /**
   * Book.conversations
   */
  export type Book$conversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    cursor?: ConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Book without action
   */
  export type BookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
  }


  /**
   * Model Chapter
   */

  export type AggregateChapter = {
    _count: ChapterCountAggregateOutputType | null
    _avg: ChapterAvgAggregateOutputType | null
    _sum: ChapterSumAggregateOutputType | null
    _min: ChapterMinAggregateOutputType | null
    _max: ChapterMaxAggregateOutputType | null
  }

  export type ChapterAvgAggregateOutputType = {
    chapterNo: number | null
    startPage: number | null
    endPage: number | null
  }

  export type ChapterSumAggregateOutputType = {
    chapterNo: number | null
    startPage: number | null
    endPage: number | null
  }

  export type ChapterMinAggregateOutputType = {
    id: string | null
    title: string | null
    chapterNo: number | null
    startPage: number | null
    endPage: number | null
    bookId: string | null
  }

  export type ChapterMaxAggregateOutputType = {
    id: string | null
    title: string | null
    chapterNo: number | null
    startPage: number | null
    endPage: number | null
    bookId: string | null
  }

  export type ChapterCountAggregateOutputType = {
    id: number
    title: number
    chapterNo: number
    startPage: number
    endPage: number
    bookId: number
    _all: number
  }


  export type ChapterAvgAggregateInputType = {
    chapterNo?: true
    startPage?: true
    endPage?: true
  }

  export type ChapterSumAggregateInputType = {
    chapterNo?: true
    startPage?: true
    endPage?: true
  }

  export type ChapterMinAggregateInputType = {
    id?: true
    title?: true
    chapterNo?: true
    startPage?: true
    endPage?: true
    bookId?: true
  }

  export type ChapterMaxAggregateInputType = {
    id?: true
    title?: true
    chapterNo?: true
    startPage?: true
    endPage?: true
    bookId?: true
  }

  export type ChapterCountAggregateInputType = {
    id?: true
    title?: true
    chapterNo?: true
    startPage?: true
    endPage?: true
    bookId?: true
    _all?: true
  }

  export type ChapterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chapter to aggregate.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chapters
    **/
    _count?: true | ChapterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChapterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChapterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChapterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChapterMaxAggregateInputType
  }

  export type GetChapterAggregateType<T extends ChapterAggregateArgs> = {
        [P in keyof T & keyof AggregateChapter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChapter[P]>
      : GetScalarType<T[P], AggregateChapter[P]>
  }




  export type ChapterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChapterWhereInput
    orderBy?: ChapterOrderByWithAggregationInput | ChapterOrderByWithAggregationInput[]
    by: ChapterScalarFieldEnum[] | ChapterScalarFieldEnum
    having?: ChapterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChapterCountAggregateInputType | true
    _avg?: ChapterAvgAggregateInputType
    _sum?: ChapterSumAggregateInputType
    _min?: ChapterMinAggregateInputType
    _max?: ChapterMaxAggregateInputType
  }

  export type ChapterGroupByOutputType = {
    id: string
    title: string
    chapterNo: number
    startPage: number | null
    endPage: number | null
    bookId: string
    _count: ChapterCountAggregateOutputType | null
    _avg: ChapterAvgAggregateOutputType | null
    _sum: ChapterSumAggregateOutputType | null
    _min: ChapterMinAggregateOutputType | null
    _max: ChapterMaxAggregateOutputType | null
  }

  type GetChapterGroupByPayload<T extends ChapterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChapterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChapterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChapterGroupByOutputType[P]>
            : GetScalarType<T[P], ChapterGroupByOutputType[P]>
        }
      >
    >


  export type ChapterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    chapterNo?: boolean
    startPage?: boolean
    endPage?: boolean
    bookId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    sections?: boolean | Chapter$sectionsArgs<ExtArgs>
    _count?: boolean | ChapterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapter"]>

  export type ChapterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    chapterNo?: boolean
    startPage?: boolean
    endPage?: boolean
    bookId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapter"]>

  export type ChapterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    chapterNo?: boolean
    startPage?: boolean
    endPage?: boolean
    bookId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapter"]>

  export type ChapterSelectScalar = {
    id?: boolean
    title?: boolean
    chapterNo?: boolean
    startPage?: boolean
    endPage?: boolean
    bookId?: boolean
  }

  export type ChapterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "chapterNo" | "startPage" | "endPage" | "bookId", ExtArgs["result"]["chapter"]>
  export type ChapterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    sections?: boolean | Chapter$sectionsArgs<ExtArgs>
    _count?: boolean | ChapterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChapterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type ChapterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }

  export type $ChapterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chapter"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
      sections: Prisma.$SectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      chapterNo: number
      startPage: number | null
      endPage: number | null
      bookId: string
    }, ExtArgs["result"]["chapter"]>
    composites: {}
  }

  type ChapterGetPayload<S extends boolean | null | undefined | ChapterDefaultArgs> = $Result.GetResult<Prisma.$ChapterPayload, S>

  type ChapterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChapterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChapterCountAggregateInputType | true
    }

  export interface ChapterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chapter'], meta: { name: 'Chapter' } }
    /**
     * Find zero or one Chapter that matches the filter.
     * @param {ChapterFindUniqueArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChapterFindUniqueArgs>(args: SelectSubset<T, ChapterFindUniqueArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chapter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChapterFindUniqueOrThrowArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChapterFindUniqueOrThrowArgs>(args: SelectSubset<T, ChapterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindFirstArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChapterFindFirstArgs>(args?: SelectSubset<T, ChapterFindFirstArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindFirstOrThrowArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChapterFindFirstOrThrowArgs>(args?: SelectSubset<T, ChapterFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chapters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chapters
     * const chapters = await prisma.chapter.findMany()
     * 
     * // Get first 10 Chapters
     * const chapters = await prisma.chapter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chapterWithIdOnly = await prisma.chapter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChapterFindManyArgs>(args?: SelectSubset<T, ChapterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chapter.
     * @param {ChapterCreateArgs} args - Arguments to create a Chapter.
     * @example
     * // Create one Chapter
     * const Chapter = await prisma.chapter.create({
     *   data: {
     *     // ... data to create a Chapter
     *   }
     * })
     * 
     */
    create<T extends ChapterCreateArgs>(args: SelectSubset<T, ChapterCreateArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chapters.
     * @param {ChapterCreateManyArgs} args - Arguments to create many Chapters.
     * @example
     * // Create many Chapters
     * const chapter = await prisma.chapter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChapterCreateManyArgs>(args?: SelectSubset<T, ChapterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chapters and returns the data saved in the database.
     * @param {ChapterCreateManyAndReturnArgs} args - Arguments to create many Chapters.
     * @example
     * // Create many Chapters
     * const chapter = await prisma.chapter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chapters and only return the `id`
     * const chapterWithIdOnly = await prisma.chapter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChapterCreateManyAndReturnArgs>(args?: SelectSubset<T, ChapterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chapter.
     * @param {ChapterDeleteArgs} args - Arguments to delete one Chapter.
     * @example
     * // Delete one Chapter
     * const Chapter = await prisma.chapter.delete({
     *   where: {
     *     // ... filter to delete one Chapter
     *   }
     * })
     * 
     */
    delete<T extends ChapterDeleteArgs>(args: SelectSubset<T, ChapterDeleteArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chapter.
     * @param {ChapterUpdateArgs} args - Arguments to update one Chapter.
     * @example
     * // Update one Chapter
     * const chapter = await prisma.chapter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChapterUpdateArgs>(args: SelectSubset<T, ChapterUpdateArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chapters.
     * @param {ChapterDeleteManyArgs} args - Arguments to filter Chapters to delete.
     * @example
     * // Delete a few Chapters
     * const { count } = await prisma.chapter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChapterDeleteManyArgs>(args?: SelectSubset<T, ChapterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chapters
     * const chapter = await prisma.chapter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChapterUpdateManyArgs>(args: SelectSubset<T, ChapterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chapters and returns the data updated in the database.
     * @param {ChapterUpdateManyAndReturnArgs} args - Arguments to update many Chapters.
     * @example
     * // Update many Chapters
     * const chapter = await prisma.chapter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chapters and only return the `id`
     * const chapterWithIdOnly = await prisma.chapter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChapterUpdateManyAndReturnArgs>(args: SelectSubset<T, ChapterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chapter.
     * @param {ChapterUpsertArgs} args - Arguments to update or create a Chapter.
     * @example
     * // Update or create a Chapter
     * const chapter = await prisma.chapter.upsert({
     *   create: {
     *     // ... data to create a Chapter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chapter we want to update
     *   }
     * })
     */
    upsert<T extends ChapterUpsertArgs>(args: SelectSubset<T, ChapterUpsertArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterCountArgs} args - Arguments to filter Chapters to count.
     * @example
     * // Count the number of Chapters
     * const count = await prisma.chapter.count({
     *   where: {
     *     // ... the filter for the Chapters we want to count
     *   }
     * })
    **/
    count<T extends ChapterCountArgs>(
      args?: Subset<T, ChapterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChapterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChapterAggregateArgs>(args: Subset<T, ChapterAggregateArgs>): Prisma.PrismaPromise<GetChapterAggregateType<T>>

    /**
     * Group by Chapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChapterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChapterGroupByArgs['orderBy'] }
        : { orderBy?: ChapterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChapterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChapterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chapter model
   */
  readonly fields: ChapterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chapter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChapterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sections<T extends Chapter$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, Chapter$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chapter model
   */
  interface ChapterFieldRefs {
    readonly id: FieldRef<"Chapter", 'String'>
    readonly title: FieldRef<"Chapter", 'String'>
    readonly chapterNo: FieldRef<"Chapter", 'Int'>
    readonly startPage: FieldRef<"Chapter", 'Int'>
    readonly endPage: FieldRef<"Chapter", 'Int'>
    readonly bookId: FieldRef<"Chapter", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Chapter findUnique
   */
  export type ChapterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter findUniqueOrThrow
   */
  export type ChapterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter findFirst
   */
  export type ChapterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chapters.
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chapters.
     */
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Chapter findFirstOrThrow
   */
  export type ChapterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chapters.
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chapters.
     */
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Chapter findMany
   */
  export type ChapterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapters to fetch.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chapters.
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Chapter create
   */
  export type ChapterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * The data needed to create a Chapter.
     */
    data: XOR<ChapterCreateInput, ChapterUncheckedCreateInput>
  }

  /**
   * Chapter createMany
   */
  export type ChapterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chapters.
     */
    data: ChapterCreateManyInput | ChapterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chapter createManyAndReturn
   */
  export type ChapterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * The data used to create many Chapters.
     */
    data: ChapterCreateManyInput | ChapterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chapter update
   */
  export type ChapterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * The data needed to update a Chapter.
     */
    data: XOR<ChapterUpdateInput, ChapterUncheckedUpdateInput>
    /**
     * Choose, which Chapter to update.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter updateMany
   */
  export type ChapterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chapters.
     */
    data: XOR<ChapterUpdateManyMutationInput, ChapterUncheckedUpdateManyInput>
    /**
     * Filter which Chapters to update
     */
    where?: ChapterWhereInput
    /**
     * Limit how many Chapters to update.
     */
    limit?: number
  }

  /**
   * Chapter updateManyAndReturn
   */
  export type ChapterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * The data used to update Chapters.
     */
    data: XOR<ChapterUpdateManyMutationInput, ChapterUncheckedUpdateManyInput>
    /**
     * Filter which Chapters to update
     */
    where?: ChapterWhereInput
    /**
     * Limit how many Chapters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chapter upsert
   */
  export type ChapterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * The filter to search for the Chapter to update in case it exists.
     */
    where: ChapterWhereUniqueInput
    /**
     * In case the Chapter found by the `where` argument doesn't exist, create a new Chapter with this data.
     */
    create: XOR<ChapterCreateInput, ChapterUncheckedCreateInput>
    /**
     * In case the Chapter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChapterUpdateInput, ChapterUncheckedUpdateInput>
  }

  /**
   * Chapter delete
   */
  export type ChapterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter which Chapter to delete.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter deleteMany
   */
  export type ChapterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chapters to delete
     */
    where?: ChapterWhereInput
    /**
     * Limit how many Chapters to delete.
     */
    limit?: number
  }

  /**
   * Chapter.sections
   */
  export type Chapter$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    cursor?: SectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Chapter without action
   */
  export type ChapterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
  }


  /**
   * Model Section
   */

  export type AggregateSection = {
    _count: SectionCountAggregateOutputType | null
    _avg: SectionAvgAggregateOutputType | null
    _sum: SectionSumAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  export type SectionAvgAggregateOutputType = {
    sectionNo: number | null
  }

  export type SectionSumAggregateOutputType = {
    sectionNo: number | null
  }

  export type SectionMinAggregateOutputType = {
    id: string | null
    title: string | null
    sectionNo: number | null
    content: string | null
    chapterId: string | null
  }

  export type SectionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    sectionNo: number | null
    content: string | null
    chapterId: string | null
  }

  export type SectionCountAggregateOutputType = {
    id: number
    title: number
    sectionNo: number
    content: number
    chapterId: number
    _all: number
  }


  export type SectionAvgAggregateInputType = {
    sectionNo?: true
  }

  export type SectionSumAggregateInputType = {
    sectionNo?: true
  }

  export type SectionMinAggregateInputType = {
    id?: true
    title?: true
    sectionNo?: true
    content?: true
    chapterId?: true
  }

  export type SectionMaxAggregateInputType = {
    id?: true
    title?: true
    sectionNo?: true
    content?: true
    chapterId?: true
  }

  export type SectionCountAggregateInputType = {
    id?: true
    title?: true
    sectionNo?: true
    content?: true
    chapterId?: true
    _all?: true
  }

  export type SectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Section to aggregate.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sections
    **/
    _count?: true | SectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectionMaxAggregateInputType
  }

  export type GetSectionAggregateType<T extends SectionAggregateArgs> = {
        [P in keyof T & keyof AggregateSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSection[P]>
      : GetScalarType<T[P], AggregateSection[P]>
  }




  export type SectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithAggregationInput | SectionOrderByWithAggregationInput[]
    by: SectionScalarFieldEnum[] | SectionScalarFieldEnum
    having?: SectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectionCountAggregateInputType | true
    _avg?: SectionAvgAggregateInputType
    _sum?: SectionSumAggregateInputType
    _min?: SectionMinAggregateInputType
    _max?: SectionMaxAggregateInputType
  }

  export type SectionGroupByOutputType = {
    id: string
    title: string | null
    sectionNo: number
    content: string | null
    chapterId: string
    _count: SectionCountAggregateOutputType | null
    _avg: SectionAvgAggregateOutputType | null
    _sum: SectionSumAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  type GetSectionGroupByPayload<T extends SectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectionGroupByOutputType[P]>
            : GetScalarType<T[P], SectionGroupByOutputType[P]>
        }
      >
    >


  export type SectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    sectionNo?: boolean
    content?: boolean
    chapterId?: boolean
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
    chunks?: boolean | Section$chunksArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    sectionNo?: boolean
    content?: boolean
    chapterId?: boolean
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    sectionNo?: boolean
    content?: boolean
    chapterId?: boolean
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectScalar = {
    id?: boolean
    title?: boolean
    sectionNo?: boolean
    content?: boolean
    chapterId?: boolean
  }

  export type SectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "sectionNo" | "content" | "chapterId", ExtArgs["result"]["section"]>
  export type SectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
    chunks?: boolean | Section$chunksArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
  }
  export type SectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
  }

  export type $SectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Section"
    objects: {
      chapter: Prisma.$ChapterPayload<ExtArgs>
      chunks: Prisma.$ContentChunkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string | null
      sectionNo: number
      content: string | null
      chapterId: string
    }, ExtArgs["result"]["section"]>
    composites: {}
  }

  type SectionGetPayload<S extends boolean | null | undefined | SectionDefaultArgs> = $Result.GetResult<Prisma.$SectionPayload, S>

  type SectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SectionCountAggregateInputType | true
    }

  export interface SectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Section'], meta: { name: 'Section' } }
    /**
     * Find zero or one Section that matches the filter.
     * @param {SectionFindUniqueArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectionFindUniqueArgs>(args: SelectSubset<T, SectionFindUniqueArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Section that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SectionFindUniqueOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectionFindUniqueOrThrowArgs>(args: SelectSubset<T, SectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectionFindFirstArgs>(args?: SelectSubset<T, SectionFindFirstArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectionFindFirstOrThrowArgs>(args?: SelectSubset<T, SectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sections
     * const sections = await prisma.section.findMany()
     * 
     * // Get first 10 Sections
     * const sections = await prisma.section.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectionWithIdOnly = await prisma.section.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SectionFindManyArgs>(args?: SelectSubset<T, SectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Section.
     * @param {SectionCreateArgs} args - Arguments to create a Section.
     * @example
     * // Create one Section
     * const Section = await prisma.section.create({
     *   data: {
     *     // ... data to create a Section
     *   }
     * })
     * 
     */
    create<T extends SectionCreateArgs>(args: SelectSubset<T, SectionCreateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sections.
     * @param {SectionCreateManyArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SectionCreateManyArgs>(args?: SelectSubset<T, SectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sections and returns the data saved in the database.
     * @param {SectionCreateManyAndReturnArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sections and only return the `id`
     * const sectionWithIdOnly = await prisma.section.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SectionCreateManyAndReturnArgs>(args?: SelectSubset<T, SectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Section.
     * @param {SectionDeleteArgs} args - Arguments to delete one Section.
     * @example
     * // Delete one Section
     * const Section = await prisma.section.delete({
     *   where: {
     *     // ... filter to delete one Section
     *   }
     * })
     * 
     */
    delete<T extends SectionDeleteArgs>(args: SelectSubset<T, SectionDeleteArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Section.
     * @param {SectionUpdateArgs} args - Arguments to update one Section.
     * @example
     * // Update one Section
     * const section = await prisma.section.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SectionUpdateArgs>(args: SelectSubset<T, SectionUpdateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sections.
     * @param {SectionDeleteManyArgs} args - Arguments to filter Sections to delete.
     * @example
     * // Delete a few Sections
     * const { count } = await prisma.section.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SectionDeleteManyArgs>(args?: SelectSubset<T, SectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SectionUpdateManyArgs>(args: SelectSubset<T, SectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections and returns the data updated in the database.
     * @param {SectionUpdateManyAndReturnArgs} args - Arguments to update many Sections.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sections and only return the `id`
     * const sectionWithIdOnly = await prisma.section.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SectionUpdateManyAndReturnArgs>(args: SelectSubset<T, SectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Section.
     * @param {SectionUpsertArgs} args - Arguments to update or create a Section.
     * @example
     * // Update or create a Section
     * const section = await prisma.section.upsert({
     *   create: {
     *     // ... data to create a Section
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Section we want to update
     *   }
     * })
     */
    upsert<T extends SectionUpsertArgs>(args: SelectSubset<T, SectionUpsertArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionCountArgs} args - Arguments to filter Sections to count.
     * @example
     * // Count the number of Sections
     * const count = await prisma.section.count({
     *   where: {
     *     // ... the filter for the Sections we want to count
     *   }
     * })
    **/
    count<T extends SectionCountArgs>(
      args?: Subset<T, SectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SectionAggregateArgs>(args: Subset<T, SectionAggregateArgs>): Prisma.PrismaPromise<GetSectionAggregateType<T>>

    /**
     * Group by Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectionGroupByArgs['orderBy'] }
        : { orderBy?: SectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Section model
   */
  readonly fields: SectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Section.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chapter<T extends ChapterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChapterDefaultArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chunks<T extends Section$chunksArgs<ExtArgs> = {}>(args?: Subset<T, Section$chunksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentChunkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Section model
   */
  interface SectionFieldRefs {
    readonly id: FieldRef<"Section", 'String'>
    readonly title: FieldRef<"Section", 'String'>
    readonly sectionNo: FieldRef<"Section", 'Int'>
    readonly content: FieldRef<"Section", 'String'>
    readonly chapterId: FieldRef<"Section", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Section findUnique
   */
  export type SectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findUniqueOrThrow
   */
  export type SectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findFirst
   */
  export type SectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findFirstOrThrow
   */
  export type SectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findMany
   */
  export type SectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Sections to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section create
   */
  export type SectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Section.
     */
    data: XOR<SectionCreateInput, SectionUncheckedCreateInput>
  }

  /**
   * Section createMany
   */
  export type SectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Section createManyAndReturn
   */
  export type SectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Section update
   */
  export type SectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Section.
     */
    data: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
    /**
     * Choose, which Section to update.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section updateMany
   */
  export type SectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to update.
     */
    limit?: number
  }

  /**
   * Section updateManyAndReturn
   */
  export type SectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Section upsert
   */
  export type SectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Section to update in case it exists.
     */
    where: SectionWhereUniqueInput
    /**
     * In case the Section found by the `where` argument doesn't exist, create a new Section with this data.
     */
    create: XOR<SectionCreateInput, SectionUncheckedCreateInput>
    /**
     * In case the Section was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
  }

  /**
   * Section delete
   */
  export type SectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter which Section to delete.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section deleteMany
   */
  export type SectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sections to delete
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to delete.
     */
    limit?: number
  }

  /**
   * Section.chunks
   */
  export type Section$chunksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentChunk
     */
    select?: ContentChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentChunk
     */
    omit?: ContentChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentChunkInclude<ExtArgs> | null
    where?: ContentChunkWhereInput
    orderBy?: ContentChunkOrderByWithRelationInput | ContentChunkOrderByWithRelationInput[]
    cursor?: ContentChunkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentChunkScalarFieldEnum | ContentChunkScalarFieldEnum[]
  }

  /**
   * Section without action
   */
  export type SectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
  }


  /**
   * Model ContentChunk
   */

  export type AggregateContentChunk = {
    _count: ContentChunkCountAggregateOutputType | null
    _avg: ContentChunkAvgAggregateOutputType | null
    _sum: ContentChunkSumAggregateOutputType | null
    _min: ContentChunkMinAggregateOutputType | null
    _max: ContentChunkMaxAggregateOutputType | null
  }

  export type ContentChunkAvgAggregateOutputType = {
    chunkNo: number | null
    pageStart: number | null
    pageEnd: number | null
  }

  export type ContentChunkSumAggregateOutputType = {
    chunkNo: number | null
    pageStart: number | null
    pageEnd: number | null
  }

  export type ContentChunkMinAggregateOutputType = {
    id: string | null
    content: string | null
    chunkNo: number | null
    pageStart: number | null
    pageEnd: number | null
    bookId: string | null
    sectionId: string | null
  }

  export type ContentChunkMaxAggregateOutputType = {
    id: string | null
    content: string | null
    chunkNo: number | null
    pageStart: number | null
    pageEnd: number | null
    bookId: string | null
    sectionId: string | null
  }

  export type ContentChunkCountAggregateOutputType = {
    id: number
    content: number
    chunkNo: number
    pageStart: number
    pageEnd: number
    bookId: number
    sectionId: number
    _all: number
  }


  export type ContentChunkAvgAggregateInputType = {
    chunkNo?: true
    pageStart?: true
    pageEnd?: true
  }

  export type ContentChunkSumAggregateInputType = {
    chunkNo?: true
    pageStart?: true
    pageEnd?: true
  }

  export type ContentChunkMinAggregateInputType = {
    id?: true
    content?: true
    chunkNo?: true
    pageStart?: true
    pageEnd?: true
    bookId?: true
    sectionId?: true
  }

  export type ContentChunkMaxAggregateInputType = {
    id?: true
    content?: true
    chunkNo?: true
    pageStart?: true
    pageEnd?: true
    bookId?: true
    sectionId?: true
  }

  export type ContentChunkCountAggregateInputType = {
    id?: true
    content?: true
    chunkNo?: true
    pageStart?: true
    pageEnd?: true
    bookId?: true
    sectionId?: true
    _all?: true
  }

  export type ContentChunkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentChunk to aggregate.
     */
    where?: ContentChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentChunks to fetch.
     */
    orderBy?: ContentChunkOrderByWithRelationInput | ContentChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentChunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentChunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContentChunks
    **/
    _count?: true | ContentChunkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContentChunkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContentChunkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentChunkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentChunkMaxAggregateInputType
  }

  export type GetContentChunkAggregateType<T extends ContentChunkAggregateArgs> = {
        [P in keyof T & keyof AggregateContentChunk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContentChunk[P]>
      : GetScalarType<T[P], AggregateContentChunk[P]>
  }




  export type ContentChunkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentChunkWhereInput
    orderBy?: ContentChunkOrderByWithAggregationInput | ContentChunkOrderByWithAggregationInput[]
    by: ContentChunkScalarFieldEnum[] | ContentChunkScalarFieldEnum
    having?: ContentChunkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentChunkCountAggregateInputType | true
    _avg?: ContentChunkAvgAggregateInputType
    _sum?: ContentChunkSumAggregateInputType
    _min?: ContentChunkMinAggregateInputType
    _max?: ContentChunkMaxAggregateInputType
  }

  export type ContentChunkGroupByOutputType = {
    id: string
    content: string
    chunkNo: number
    pageStart: number | null
    pageEnd: number | null
    bookId: string
    sectionId: string | null
    _count: ContentChunkCountAggregateOutputType | null
    _avg: ContentChunkAvgAggregateOutputType | null
    _sum: ContentChunkSumAggregateOutputType | null
    _min: ContentChunkMinAggregateOutputType | null
    _max: ContentChunkMaxAggregateOutputType | null
  }

  type GetContentChunkGroupByPayload<T extends ContentChunkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentChunkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentChunkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentChunkGroupByOutputType[P]>
            : GetScalarType<T[P], ContentChunkGroupByOutputType[P]>
        }
      >
    >


  export type ContentChunkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    chunkNo?: boolean
    pageStart?: boolean
    pageEnd?: boolean
    bookId?: boolean
    sectionId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    section?: boolean | ContentChunk$sectionArgs<ExtArgs>
  }, ExtArgs["result"]["contentChunk"]>

  export type ContentChunkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    chunkNo?: boolean
    pageStart?: boolean
    pageEnd?: boolean
    bookId?: boolean
    sectionId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    section?: boolean | ContentChunk$sectionArgs<ExtArgs>
  }, ExtArgs["result"]["contentChunk"]>

  export type ContentChunkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    chunkNo?: boolean
    pageStart?: boolean
    pageEnd?: boolean
    bookId?: boolean
    sectionId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    section?: boolean | ContentChunk$sectionArgs<ExtArgs>
  }, ExtArgs["result"]["contentChunk"]>

  export type ContentChunkSelectScalar = {
    id?: boolean
    content?: boolean
    chunkNo?: boolean
    pageStart?: boolean
    pageEnd?: boolean
    bookId?: boolean
    sectionId?: boolean
  }

  export type ContentChunkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "chunkNo" | "pageStart" | "pageEnd" | "bookId" | "sectionId", ExtArgs["result"]["contentChunk"]>
  export type ContentChunkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    section?: boolean | ContentChunk$sectionArgs<ExtArgs>
  }
  export type ContentChunkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    section?: boolean | ContentChunk$sectionArgs<ExtArgs>
  }
  export type ContentChunkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    section?: boolean | ContentChunk$sectionArgs<ExtArgs>
  }

  export type $ContentChunkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContentChunk"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
      section: Prisma.$SectionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      chunkNo: number
      pageStart: number | null
      pageEnd: number | null
      bookId: string
      sectionId: string | null
    }, ExtArgs["result"]["contentChunk"]>
    composites: {}
  }

  type ContentChunkGetPayload<S extends boolean | null | undefined | ContentChunkDefaultArgs> = $Result.GetResult<Prisma.$ContentChunkPayload, S>

  type ContentChunkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContentChunkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContentChunkCountAggregateInputType | true
    }

  export interface ContentChunkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContentChunk'], meta: { name: 'ContentChunk' } }
    /**
     * Find zero or one ContentChunk that matches the filter.
     * @param {ContentChunkFindUniqueArgs} args - Arguments to find a ContentChunk
     * @example
     * // Get one ContentChunk
     * const contentChunk = await prisma.contentChunk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentChunkFindUniqueArgs>(args: SelectSubset<T, ContentChunkFindUniqueArgs<ExtArgs>>): Prisma__ContentChunkClient<$Result.GetResult<Prisma.$ContentChunkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContentChunk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentChunkFindUniqueOrThrowArgs} args - Arguments to find a ContentChunk
     * @example
     * // Get one ContentChunk
     * const contentChunk = await prisma.contentChunk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentChunkFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentChunkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentChunkClient<$Result.GetResult<Prisma.$ContentChunkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentChunk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentChunkFindFirstArgs} args - Arguments to find a ContentChunk
     * @example
     * // Get one ContentChunk
     * const contentChunk = await prisma.contentChunk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentChunkFindFirstArgs>(args?: SelectSubset<T, ContentChunkFindFirstArgs<ExtArgs>>): Prisma__ContentChunkClient<$Result.GetResult<Prisma.$ContentChunkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentChunk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentChunkFindFirstOrThrowArgs} args - Arguments to find a ContentChunk
     * @example
     * // Get one ContentChunk
     * const contentChunk = await prisma.contentChunk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentChunkFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentChunkFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentChunkClient<$Result.GetResult<Prisma.$ContentChunkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContentChunks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentChunkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContentChunks
     * const contentChunks = await prisma.contentChunk.findMany()
     * 
     * // Get first 10 ContentChunks
     * const contentChunks = await prisma.contentChunk.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentChunkWithIdOnly = await prisma.contentChunk.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentChunkFindManyArgs>(args?: SelectSubset<T, ContentChunkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentChunkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContentChunk.
     * @param {ContentChunkCreateArgs} args - Arguments to create a ContentChunk.
     * @example
     * // Create one ContentChunk
     * const ContentChunk = await prisma.contentChunk.create({
     *   data: {
     *     // ... data to create a ContentChunk
     *   }
     * })
     * 
     */
    create<T extends ContentChunkCreateArgs>(args: SelectSubset<T, ContentChunkCreateArgs<ExtArgs>>): Prisma__ContentChunkClient<$Result.GetResult<Prisma.$ContentChunkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContentChunks.
     * @param {ContentChunkCreateManyArgs} args - Arguments to create many ContentChunks.
     * @example
     * // Create many ContentChunks
     * const contentChunk = await prisma.contentChunk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentChunkCreateManyArgs>(args?: SelectSubset<T, ContentChunkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContentChunks and returns the data saved in the database.
     * @param {ContentChunkCreateManyAndReturnArgs} args - Arguments to create many ContentChunks.
     * @example
     * // Create many ContentChunks
     * const contentChunk = await prisma.contentChunk.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContentChunks and only return the `id`
     * const contentChunkWithIdOnly = await prisma.contentChunk.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContentChunkCreateManyAndReturnArgs>(args?: SelectSubset<T, ContentChunkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentChunkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContentChunk.
     * @param {ContentChunkDeleteArgs} args - Arguments to delete one ContentChunk.
     * @example
     * // Delete one ContentChunk
     * const ContentChunk = await prisma.contentChunk.delete({
     *   where: {
     *     // ... filter to delete one ContentChunk
     *   }
     * })
     * 
     */
    delete<T extends ContentChunkDeleteArgs>(args: SelectSubset<T, ContentChunkDeleteArgs<ExtArgs>>): Prisma__ContentChunkClient<$Result.GetResult<Prisma.$ContentChunkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContentChunk.
     * @param {ContentChunkUpdateArgs} args - Arguments to update one ContentChunk.
     * @example
     * // Update one ContentChunk
     * const contentChunk = await prisma.contentChunk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentChunkUpdateArgs>(args: SelectSubset<T, ContentChunkUpdateArgs<ExtArgs>>): Prisma__ContentChunkClient<$Result.GetResult<Prisma.$ContentChunkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContentChunks.
     * @param {ContentChunkDeleteManyArgs} args - Arguments to filter ContentChunks to delete.
     * @example
     * // Delete a few ContentChunks
     * const { count } = await prisma.contentChunk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentChunkDeleteManyArgs>(args?: SelectSubset<T, ContentChunkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentChunks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentChunkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContentChunks
     * const contentChunk = await prisma.contentChunk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentChunkUpdateManyArgs>(args: SelectSubset<T, ContentChunkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentChunks and returns the data updated in the database.
     * @param {ContentChunkUpdateManyAndReturnArgs} args - Arguments to update many ContentChunks.
     * @example
     * // Update many ContentChunks
     * const contentChunk = await prisma.contentChunk.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContentChunks and only return the `id`
     * const contentChunkWithIdOnly = await prisma.contentChunk.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContentChunkUpdateManyAndReturnArgs>(args: SelectSubset<T, ContentChunkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentChunkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContentChunk.
     * @param {ContentChunkUpsertArgs} args - Arguments to update or create a ContentChunk.
     * @example
     * // Update or create a ContentChunk
     * const contentChunk = await prisma.contentChunk.upsert({
     *   create: {
     *     // ... data to create a ContentChunk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContentChunk we want to update
     *   }
     * })
     */
    upsert<T extends ContentChunkUpsertArgs>(args: SelectSubset<T, ContentChunkUpsertArgs<ExtArgs>>): Prisma__ContentChunkClient<$Result.GetResult<Prisma.$ContentChunkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContentChunks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentChunkCountArgs} args - Arguments to filter ContentChunks to count.
     * @example
     * // Count the number of ContentChunks
     * const count = await prisma.contentChunk.count({
     *   where: {
     *     // ... the filter for the ContentChunks we want to count
     *   }
     * })
    **/
    count<T extends ContentChunkCountArgs>(
      args?: Subset<T, ContentChunkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentChunkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContentChunk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentChunkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContentChunkAggregateArgs>(args: Subset<T, ContentChunkAggregateArgs>): Prisma.PrismaPromise<GetContentChunkAggregateType<T>>

    /**
     * Group by ContentChunk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentChunkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContentChunkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentChunkGroupByArgs['orderBy'] }
        : { orderBy?: ContentChunkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContentChunkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentChunkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContentChunk model
   */
  readonly fields: ContentChunkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContentChunk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentChunkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    section<T extends ContentChunk$sectionArgs<ExtArgs> = {}>(args?: Subset<T, ContentChunk$sectionArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContentChunk model
   */
  interface ContentChunkFieldRefs {
    readonly id: FieldRef<"ContentChunk", 'String'>
    readonly content: FieldRef<"ContentChunk", 'String'>
    readonly chunkNo: FieldRef<"ContentChunk", 'Int'>
    readonly pageStart: FieldRef<"ContentChunk", 'Int'>
    readonly pageEnd: FieldRef<"ContentChunk", 'Int'>
    readonly bookId: FieldRef<"ContentChunk", 'String'>
    readonly sectionId: FieldRef<"ContentChunk", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ContentChunk findUnique
   */
  export type ContentChunkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentChunk
     */
    select?: ContentChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentChunk
     */
    omit?: ContentChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentChunkInclude<ExtArgs> | null
    /**
     * Filter, which ContentChunk to fetch.
     */
    where: ContentChunkWhereUniqueInput
  }

  /**
   * ContentChunk findUniqueOrThrow
   */
  export type ContentChunkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentChunk
     */
    select?: ContentChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentChunk
     */
    omit?: ContentChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentChunkInclude<ExtArgs> | null
    /**
     * Filter, which ContentChunk to fetch.
     */
    where: ContentChunkWhereUniqueInput
  }

  /**
   * ContentChunk findFirst
   */
  export type ContentChunkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentChunk
     */
    select?: ContentChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentChunk
     */
    omit?: ContentChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentChunkInclude<ExtArgs> | null
    /**
     * Filter, which ContentChunk to fetch.
     */
    where?: ContentChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentChunks to fetch.
     */
    orderBy?: ContentChunkOrderByWithRelationInput | ContentChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentChunks.
     */
    cursor?: ContentChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentChunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentChunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentChunks.
     */
    distinct?: ContentChunkScalarFieldEnum | ContentChunkScalarFieldEnum[]
  }

  /**
   * ContentChunk findFirstOrThrow
   */
  export type ContentChunkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentChunk
     */
    select?: ContentChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentChunk
     */
    omit?: ContentChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentChunkInclude<ExtArgs> | null
    /**
     * Filter, which ContentChunk to fetch.
     */
    where?: ContentChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentChunks to fetch.
     */
    orderBy?: ContentChunkOrderByWithRelationInput | ContentChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentChunks.
     */
    cursor?: ContentChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentChunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentChunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentChunks.
     */
    distinct?: ContentChunkScalarFieldEnum | ContentChunkScalarFieldEnum[]
  }

  /**
   * ContentChunk findMany
   */
  export type ContentChunkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentChunk
     */
    select?: ContentChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentChunk
     */
    omit?: ContentChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentChunkInclude<ExtArgs> | null
    /**
     * Filter, which ContentChunks to fetch.
     */
    where?: ContentChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentChunks to fetch.
     */
    orderBy?: ContentChunkOrderByWithRelationInput | ContentChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContentChunks.
     */
    cursor?: ContentChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentChunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentChunks.
     */
    skip?: number
    distinct?: ContentChunkScalarFieldEnum | ContentChunkScalarFieldEnum[]
  }

  /**
   * ContentChunk create
   */
  export type ContentChunkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentChunk
     */
    select?: ContentChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentChunk
     */
    omit?: ContentChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentChunkInclude<ExtArgs> | null
    /**
     * The data needed to create a ContentChunk.
     */
    data: XOR<ContentChunkCreateInput, ContentChunkUncheckedCreateInput>
  }

  /**
   * ContentChunk createMany
   */
  export type ContentChunkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContentChunks.
     */
    data: ContentChunkCreateManyInput | ContentChunkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContentChunk createManyAndReturn
   */
  export type ContentChunkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentChunk
     */
    select?: ContentChunkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContentChunk
     */
    omit?: ContentChunkOmit<ExtArgs> | null
    /**
     * The data used to create many ContentChunks.
     */
    data: ContentChunkCreateManyInput | ContentChunkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentChunkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContentChunk update
   */
  export type ContentChunkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentChunk
     */
    select?: ContentChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentChunk
     */
    omit?: ContentChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentChunkInclude<ExtArgs> | null
    /**
     * The data needed to update a ContentChunk.
     */
    data: XOR<ContentChunkUpdateInput, ContentChunkUncheckedUpdateInput>
    /**
     * Choose, which ContentChunk to update.
     */
    where: ContentChunkWhereUniqueInput
  }

  /**
   * ContentChunk updateMany
   */
  export type ContentChunkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContentChunks.
     */
    data: XOR<ContentChunkUpdateManyMutationInput, ContentChunkUncheckedUpdateManyInput>
    /**
     * Filter which ContentChunks to update
     */
    where?: ContentChunkWhereInput
    /**
     * Limit how many ContentChunks to update.
     */
    limit?: number
  }

  /**
   * ContentChunk updateManyAndReturn
   */
  export type ContentChunkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentChunk
     */
    select?: ContentChunkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContentChunk
     */
    omit?: ContentChunkOmit<ExtArgs> | null
    /**
     * The data used to update ContentChunks.
     */
    data: XOR<ContentChunkUpdateManyMutationInput, ContentChunkUncheckedUpdateManyInput>
    /**
     * Filter which ContentChunks to update
     */
    where?: ContentChunkWhereInput
    /**
     * Limit how many ContentChunks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentChunkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContentChunk upsert
   */
  export type ContentChunkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentChunk
     */
    select?: ContentChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentChunk
     */
    omit?: ContentChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentChunkInclude<ExtArgs> | null
    /**
     * The filter to search for the ContentChunk to update in case it exists.
     */
    where: ContentChunkWhereUniqueInput
    /**
     * In case the ContentChunk found by the `where` argument doesn't exist, create a new ContentChunk with this data.
     */
    create: XOR<ContentChunkCreateInput, ContentChunkUncheckedCreateInput>
    /**
     * In case the ContentChunk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentChunkUpdateInput, ContentChunkUncheckedUpdateInput>
  }

  /**
   * ContentChunk delete
   */
  export type ContentChunkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentChunk
     */
    select?: ContentChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentChunk
     */
    omit?: ContentChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentChunkInclude<ExtArgs> | null
    /**
     * Filter which ContentChunk to delete.
     */
    where: ContentChunkWhereUniqueInput
  }

  /**
   * ContentChunk deleteMany
   */
  export type ContentChunkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentChunks to delete
     */
    where?: ContentChunkWhereInput
    /**
     * Limit how many ContentChunks to delete.
     */
    limit?: number
  }

  /**
   * ContentChunk.section
   */
  export type ContentChunk$sectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    where?: SectionWhereInput
  }

  /**
   * ContentChunk without action
   */
  export type ContentChunkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentChunk
     */
    select?: ContentChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentChunk
     */
    omit?: ContentChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentChunkInclude<ExtArgs> | null
  }


  /**
   * Model ReadingProgress
   */

  export type AggregateReadingProgress = {
    _count: ReadingProgressCountAggregateOutputType | null
    _avg: ReadingProgressAvgAggregateOutputType | null
    _sum: ReadingProgressSumAggregateOutputType | null
    _min: ReadingProgressMinAggregateOutputType | null
    _max: ReadingProgressMaxAggregateOutputType | null
  }

  export type ReadingProgressAvgAggregateOutputType = {
    currentPage: number | null
    currentChapter: number | null
    progress: number | null
  }

  export type ReadingProgressSumAggregateOutputType = {
    currentPage: number | null
    currentChapter: number | null
    progress: number | null
  }

  export type ReadingProgressMinAggregateOutputType = {
    id: string | null
    currentPage: number | null
    currentChapter: number | null
    progress: number | null
    lastReadAt: Date | null
    userId: string | null
    bookId: string | null
  }

  export type ReadingProgressMaxAggregateOutputType = {
    id: string | null
    currentPage: number | null
    currentChapter: number | null
    progress: number | null
    lastReadAt: Date | null
    userId: string | null
    bookId: string | null
  }

  export type ReadingProgressCountAggregateOutputType = {
    id: number
    currentPage: number
    currentChapter: number
    progress: number
    lastReadAt: number
    userId: number
    bookId: number
    _all: number
  }


  export type ReadingProgressAvgAggregateInputType = {
    currentPage?: true
    currentChapter?: true
    progress?: true
  }

  export type ReadingProgressSumAggregateInputType = {
    currentPage?: true
    currentChapter?: true
    progress?: true
  }

  export type ReadingProgressMinAggregateInputType = {
    id?: true
    currentPage?: true
    currentChapter?: true
    progress?: true
    lastReadAt?: true
    userId?: true
    bookId?: true
  }

  export type ReadingProgressMaxAggregateInputType = {
    id?: true
    currentPage?: true
    currentChapter?: true
    progress?: true
    lastReadAt?: true
    userId?: true
    bookId?: true
  }

  export type ReadingProgressCountAggregateInputType = {
    id?: true
    currentPage?: true
    currentChapter?: true
    progress?: true
    lastReadAt?: true
    userId?: true
    bookId?: true
    _all?: true
  }

  export type ReadingProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReadingProgress to aggregate.
     */
    where?: ReadingProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReadingProgresses to fetch.
     */
    orderBy?: ReadingProgressOrderByWithRelationInput | ReadingProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReadingProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReadingProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReadingProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReadingProgresses
    **/
    _count?: true | ReadingProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReadingProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReadingProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReadingProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReadingProgressMaxAggregateInputType
  }

  export type GetReadingProgressAggregateType<T extends ReadingProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateReadingProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReadingProgress[P]>
      : GetScalarType<T[P], AggregateReadingProgress[P]>
  }




  export type ReadingProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReadingProgressWhereInput
    orderBy?: ReadingProgressOrderByWithAggregationInput | ReadingProgressOrderByWithAggregationInput[]
    by: ReadingProgressScalarFieldEnum[] | ReadingProgressScalarFieldEnum
    having?: ReadingProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReadingProgressCountAggregateInputType | true
    _avg?: ReadingProgressAvgAggregateInputType
    _sum?: ReadingProgressSumAggregateInputType
    _min?: ReadingProgressMinAggregateInputType
    _max?: ReadingProgressMaxAggregateInputType
  }

  export type ReadingProgressGroupByOutputType = {
    id: string
    currentPage: number | null
    currentChapter: number | null
    progress: number
    lastReadAt: Date
    userId: string
    bookId: string
    _count: ReadingProgressCountAggregateOutputType | null
    _avg: ReadingProgressAvgAggregateOutputType | null
    _sum: ReadingProgressSumAggregateOutputType | null
    _min: ReadingProgressMinAggregateOutputType | null
    _max: ReadingProgressMaxAggregateOutputType | null
  }

  type GetReadingProgressGroupByPayload<T extends ReadingProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReadingProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReadingProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReadingProgressGroupByOutputType[P]>
            : GetScalarType<T[P], ReadingProgressGroupByOutputType[P]>
        }
      >
    >


  export type ReadingProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    currentPage?: boolean
    currentChapter?: boolean
    progress?: boolean
    lastReadAt?: boolean
    userId?: boolean
    bookId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["readingProgress"]>

  export type ReadingProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    currentPage?: boolean
    currentChapter?: boolean
    progress?: boolean
    lastReadAt?: boolean
    userId?: boolean
    bookId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["readingProgress"]>

  export type ReadingProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    currentPage?: boolean
    currentChapter?: boolean
    progress?: boolean
    lastReadAt?: boolean
    userId?: boolean
    bookId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["readingProgress"]>

  export type ReadingProgressSelectScalar = {
    id?: boolean
    currentPage?: boolean
    currentChapter?: boolean
    progress?: boolean
    lastReadAt?: boolean
    userId?: boolean
    bookId?: boolean
  }

  export type ReadingProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "currentPage" | "currentChapter" | "progress" | "lastReadAt" | "userId" | "bookId", ExtArgs["result"]["readingProgress"]>
  export type ReadingProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type ReadingProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type ReadingProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }

  export type $ReadingProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReadingProgress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      book: Prisma.$BookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      currentPage: number | null
      currentChapter: number | null
      progress: number
      lastReadAt: Date
      userId: string
      bookId: string
    }, ExtArgs["result"]["readingProgress"]>
    composites: {}
  }

  type ReadingProgressGetPayload<S extends boolean | null | undefined | ReadingProgressDefaultArgs> = $Result.GetResult<Prisma.$ReadingProgressPayload, S>

  type ReadingProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReadingProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReadingProgressCountAggregateInputType | true
    }

  export interface ReadingProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReadingProgress'], meta: { name: 'ReadingProgress' } }
    /**
     * Find zero or one ReadingProgress that matches the filter.
     * @param {ReadingProgressFindUniqueArgs} args - Arguments to find a ReadingProgress
     * @example
     * // Get one ReadingProgress
     * const readingProgress = await prisma.readingProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReadingProgressFindUniqueArgs>(args: SelectSubset<T, ReadingProgressFindUniqueArgs<ExtArgs>>): Prisma__ReadingProgressClient<$Result.GetResult<Prisma.$ReadingProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReadingProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReadingProgressFindUniqueOrThrowArgs} args - Arguments to find a ReadingProgress
     * @example
     * // Get one ReadingProgress
     * const readingProgress = await prisma.readingProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReadingProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, ReadingProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReadingProgressClient<$Result.GetResult<Prisma.$ReadingProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReadingProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingProgressFindFirstArgs} args - Arguments to find a ReadingProgress
     * @example
     * // Get one ReadingProgress
     * const readingProgress = await prisma.readingProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReadingProgressFindFirstArgs>(args?: SelectSubset<T, ReadingProgressFindFirstArgs<ExtArgs>>): Prisma__ReadingProgressClient<$Result.GetResult<Prisma.$ReadingProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReadingProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingProgressFindFirstOrThrowArgs} args - Arguments to find a ReadingProgress
     * @example
     * // Get one ReadingProgress
     * const readingProgress = await prisma.readingProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReadingProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, ReadingProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReadingProgressClient<$Result.GetResult<Prisma.$ReadingProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReadingProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReadingProgresses
     * const readingProgresses = await prisma.readingProgress.findMany()
     * 
     * // Get first 10 ReadingProgresses
     * const readingProgresses = await prisma.readingProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const readingProgressWithIdOnly = await prisma.readingProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReadingProgressFindManyArgs>(args?: SelectSubset<T, ReadingProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadingProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReadingProgress.
     * @param {ReadingProgressCreateArgs} args - Arguments to create a ReadingProgress.
     * @example
     * // Create one ReadingProgress
     * const ReadingProgress = await prisma.readingProgress.create({
     *   data: {
     *     // ... data to create a ReadingProgress
     *   }
     * })
     * 
     */
    create<T extends ReadingProgressCreateArgs>(args: SelectSubset<T, ReadingProgressCreateArgs<ExtArgs>>): Prisma__ReadingProgressClient<$Result.GetResult<Prisma.$ReadingProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReadingProgresses.
     * @param {ReadingProgressCreateManyArgs} args - Arguments to create many ReadingProgresses.
     * @example
     * // Create many ReadingProgresses
     * const readingProgress = await prisma.readingProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReadingProgressCreateManyArgs>(args?: SelectSubset<T, ReadingProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReadingProgresses and returns the data saved in the database.
     * @param {ReadingProgressCreateManyAndReturnArgs} args - Arguments to create many ReadingProgresses.
     * @example
     * // Create many ReadingProgresses
     * const readingProgress = await prisma.readingProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReadingProgresses and only return the `id`
     * const readingProgressWithIdOnly = await prisma.readingProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReadingProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, ReadingProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadingProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReadingProgress.
     * @param {ReadingProgressDeleteArgs} args - Arguments to delete one ReadingProgress.
     * @example
     * // Delete one ReadingProgress
     * const ReadingProgress = await prisma.readingProgress.delete({
     *   where: {
     *     // ... filter to delete one ReadingProgress
     *   }
     * })
     * 
     */
    delete<T extends ReadingProgressDeleteArgs>(args: SelectSubset<T, ReadingProgressDeleteArgs<ExtArgs>>): Prisma__ReadingProgressClient<$Result.GetResult<Prisma.$ReadingProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReadingProgress.
     * @param {ReadingProgressUpdateArgs} args - Arguments to update one ReadingProgress.
     * @example
     * // Update one ReadingProgress
     * const readingProgress = await prisma.readingProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReadingProgressUpdateArgs>(args: SelectSubset<T, ReadingProgressUpdateArgs<ExtArgs>>): Prisma__ReadingProgressClient<$Result.GetResult<Prisma.$ReadingProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReadingProgresses.
     * @param {ReadingProgressDeleteManyArgs} args - Arguments to filter ReadingProgresses to delete.
     * @example
     * // Delete a few ReadingProgresses
     * const { count } = await prisma.readingProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReadingProgressDeleteManyArgs>(args?: SelectSubset<T, ReadingProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReadingProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReadingProgresses
     * const readingProgress = await prisma.readingProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReadingProgressUpdateManyArgs>(args: SelectSubset<T, ReadingProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReadingProgresses and returns the data updated in the database.
     * @param {ReadingProgressUpdateManyAndReturnArgs} args - Arguments to update many ReadingProgresses.
     * @example
     * // Update many ReadingProgresses
     * const readingProgress = await prisma.readingProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReadingProgresses and only return the `id`
     * const readingProgressWithIdOnly = await prisma.readingProgress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReadingProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, ReadingProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadingProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReadingProgress.
     * @param {ReadingProgressUpsertArgs} args - Arguments to update or create a ReadingProgress.
     * @example
     * // Update or create a ReadingProgress
     * const readingProgress = await prisma.readingProgress.upsert({
     *   create: {
     *     // ... data to create a ReadingProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReadingProgress we want to update
     *   }
     * })
     */
    upsert<T extends ReadingProgressUpsertArgs>(args: SelectSubset<T, ReadingProgressUpsertArgs<ExtArgs>>): Prisma__ReadingProgressClient<$Result.GetResult<Prisma.$ReadingProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReadingProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingProgressCountArgs} args - Arguments to filter ReadingProgresses to count.
     * @example
     * // Count the number of ReadingProgresses
     * const count = await prisma.readingProgress.count({
     *   where: {
     *     // ... the filter for the ReadingProgresses we want to count
     *   }
     * })
    **/
    count<T extends ReadingProgressCountArgs>(
      args?: Subset<T, ReadingProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReadingProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReadingProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReadingProgressAggregateArgs>(args: Subset<T, ReadingProgressAggregateArgs>): Prisma.PrismaPromise<GetReadingProgressAggregateType<T>>

    /**
     * Group by ReadingProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingProgressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReadingProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReadingProgressGroupByArgs['orderBy'] }
        : { orderBy?: ReadingProgressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReadingProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReadingProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReadingProgress model
   */
  readonly fields: ReadingProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReadingProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReadingProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReadingProgress model
   */
  interface ReadingProgressFieldRefs {
    readonly id: FieldRef<"ReadingProgress", 'String'>
    readonly currentPage: FieldRef<"ReadingProgress", 'Int'>
    readonly currentChapter: FieldRef<"ReadingProgress", 'Int'>
    readonly progress: FieldRef<"ReadingProgress", 'Float'>
    readonly lastReadAt: FieldRef<"ReadingProgress", 'DateTime'>
    readonly userId: FieldRef<"ReadingProgress", 'String'>
    readonly bookId: FieldRef<"ReadingProgress", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ReadingProgress findUnique
   */
  export type ReadingProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingProgress
     */
    select?: ReadingProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingProgress
     */
    omit?: ReadingProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingProgressInclude<ExtArgs> | null
    /**
     * Filter, which ReadingProgress to fetch.
     */
    where: ReadingProgressWhereUniqueInput
  }

  /**
   * ReadingProgress findUniqueOrThrow
   */
  export type ReadingProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingProgress
     */
    select?: ReadingProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingProgress
     */
    omit?: ReadingProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingProgressInclude<ExtArgs> | null
    /**
     * Filter, which ReadingProgress to fetch.
     */
    where: ReadingProgressWhereUniqueInput
  }

  /**
   * ReadingProgress findFirst
   */
  export type ReadingProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingProgress
     */
    select?: ReadingProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingProgress
     */
    omit?: ReadingProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingProgressInclude<ExtArgs> | null
    /**
     * Filter, which ReadingProgress to fetch.
     */
    where?: ReadingProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReadingProgresses to fetch.
     */
    orderBy?: ReadingProgressOrderByWithRelationInput | ReadingProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReadingProgresses.
     */
    cursor?: ReadingProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReadingProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReadingProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReadingProgresses.
     */
    distinct?: ReadingProgressScalarFieldEnum | ReadingProgressScalarFieldEnum[]
  }

  /**
   * ReadingProgress findFirstOrThrow
   */
  export type ReadingProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingProgress
     */
    select?: ReadingProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingProgress
     */
    omit?: ReadingProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingProgressInclude<ExtArgs> | null
    /**
     * Filter, which ReadingProgress to fetch.
     */
    where?: ReadingProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReadingProgresses to fetch.
     */
    orderBy?: ReadingProgressOrderByWithRelationInput | ReadingProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReadingProgresses.
     */
    cursor?: ReadingProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReadingProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReadingProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReadingProgresses.
     */
    distinct?: ReadingProgressScalarFieldEnum | ReadingProgressScalarFieldEnum[]
  }

  /**
   * ReadingProgress findMany
   */
  export type ReadingProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingProgress
     */
    select?: ReadingProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingProgress
     */
    omit?: ReadingProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingProgressInclude<ExtArgs> | null
    /**
     * Filter, which ReadingProgresses to fetch.
     */
    where?: ReadingProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReadingProgresses to fetch.
     */
    orderBy?: ReadingProgressOrderByWithRelationInput | ReadingProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReadingProgresses.
     */
    cursor?: ReadingProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReadingProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReadingProgresses.
     */
    skip?: number
    distinct?: ReadingProgressScalarFieldEnum | ReadingProgressScalarFieldEnum[]
  }

  /**
   * ReadingProgress create
   */
  export type ReadingProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingProgress
     */
    select?: ReadingProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingProgress
     */
    omit?: ReadingProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a ReadingProgress.
     */
    data: XOR<ReadingProgressCreateInput, ReadingProgressUncheckedCreateInput>
  }

  /**
   * ReadingProgress createMany
   */
  export type ReadingProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReadingProgresses.
     */
    data: ReadingProgressCreateManyInput | ReadingProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReadingProgress createManyAndReturn
   */
  export type ReadingProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingProgress
     */
    select?: ReadingProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingProgress
     */
    omit?: ReadingProgressOmit<ExtArgs> | null
    /**
     * The data used to create many ReadingProgresses.
     */
    data: ReadingProgressCreateManyInput | ReadingProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReadingProgress update
   */
  export type ReadingProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingProgress
     */
    select?: ReadingProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingProgress
     */
    omit?: ReadingProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a ReadingProgress.
     */
    data: XOR<ReadingProgressUpdateInput, ReadingProgressUncheckedUpdateInput>
    /**
     * Choose, which ReadingProgress to update.
     */
    where: ReadingProgressWhereUniqueInput
  }

  /**
   * ReadingProgress updateMany
   */
  export type ReadingProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReadingProgresses.
     */
    data: XOR<ReadingProgressUpdateManyMutationInput, ReadingProgressUncheckedUpdateManyInput>
    /**
     * Filter which ReadingProgresses to update
     */
    where?: ReadingProgressWhereInput
    /**
     * Limit how many ReadingProgresses to update.
     */
    limit?: number
  }

  /**
   * ReadingProgress updateManyAndReturn
   */
  export type ReadingProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingProgress
     */
    select?: ReadingProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingProgress
     */
    omit?: ReadingProgressOmit<ExtArgs> | null
    /**
     * The data used to update ReadingProgresses.
     */
    data: XOR<ReadingProgressUpdateManyMutationInput, ReadingProgressUncheckedUpdateManyInput>
    /**
     * Filter which ReadingProgresses to update
     */
    where?: ReadingProgressWhereInput
    /**
     * Limit how many ReadingProgresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReadingProgress upsert
   */
  export type ReadingProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingProgress
     */
    select?: ReadingProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingProgress
     */
    omit?: ReadingProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the ReadingProgress to update in case it exists.
     */
    where: ReadingProgressWhereUniqueInput
    /**
     * In case the ReadingProgress found by the `where` argument doesn't exist, create a new ReadingProgress with this data.
     */
    create: XOR<ReadingProgressCreateInput, ReadingProgressUncheckedCreateInput>
    /**
     * In case the ReadingProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReadingProgressUpdateInput, ReadingProgressUncheckedUpdateInput>
  }

  /**
   * ReadingProgress delete
   */
  export type ReadingProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingProgress
     */
    select?: ReadingProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingProgress
     */
    omit?: ReadingProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingProgressInclude<ExtArgs> | null
    /**
     * Filter which ReadingProgress to delete.
     */
    where: ReadingProgressWhereUniqueInput
  }

  /**
   * ReadingProgress deleteMany
   */
  export type ReadingProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReadingProgresses to delete
     */
    where?: ReadingProgressWhereInput
    /**
     * Limit how many ReadingProgresses to delete.
     */
    limit?: number
  }

  /**
   * ReadingProgress without action
   */
  export type ReadingProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingProgress
     */
    select?: ReadingProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingProgress
     */
    omit?: ReadingProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingProgressInclude<ExtArgs> | null
  }


  /**
   * Model Highlight
   */

  export type AggregateHighlight = {
    _count: HighlightCountAggregateOutputType | null
    _avg: HighlightAvgAggregateOutputType | null
    _sum: HighlightSumAggregateOutputType | null
    _min: HighlightMinAggregateOutputType | null
    _max: HighlightMaxAggregateOutputType | null
  }

  export type HighlightAvgAggregateOutputType = {
    page: number | null
  }

  export type HighlightSumAggregateOutputType = {
    page: number | null
  }

  export type HighlightMinAggregateOutputType = {
    id: string | null
    text: string | null
    color: string | null
    page: number | null
    createdAt: Date | null
    userId: string | null
    bookId: string | null
  }

  export type HighlightMaxAggregateOutputType = {
    id: string | null
    text: string | null
    color: string | null
    page: number | null
    createdAt: Date | null
    userId: string | null
    bookId: string | null
  }

  export type HighlightCountAggregateOutputType = {
    id: number
    text: number
    color: number
    page: number
    position: number
    createdAt: number
    userId: number
    bookId: number
    _all: number
  }


  export type HighlightAvgAggregateInputType = {
    page?: true
  }

  export type HighlightSumAggregateInputType = {
    page?: true
  }

  export type HighlightMinAggregateInputType = {
    id?: true
    text?: true
    color?: true
    page?: true
    createdAt?: true
    userId?: true
    bookId?: true
  }

  export type HighlightMaxAggregateInputType = {
    id?: true
    text?: true
    color?: true
    page?: true
    createdAt?: true
    userId?: true
    bookId?: true
  }

  export type HighlightCountAggregateInputType = {
    id?: true
    text?: true
    color?: true
    page?: true
    position?: true
    createdAt?: true
    userId?: true
    bookId?: true
    _all?: true
  }

  export type HighlightAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Highlight to aggregate.
     */
    where?: HighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Highlights to fetch.
     */
    orderBy?: HighlightOrderByWithRelationInput | HighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Highlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Highlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Highlights
    **/
    _count?: true | HighlightCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HighlightAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HighlightSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HighlightMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HighlightMaxAggregateInputType
  }

  export type GetHighlightAggregateType<T extends HighlightAggregateArgs> = {
        [P in keyof T & keyof AggregateHighlight]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHighlight[P]>
      : GetScalarType<T[P], AggregateHighlight[P]>
  }




  export type HighlightGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HighlightWhereInput
    orderBy?: HighlightOrderByWithAggregationInput | HighlightOrderByWithAggregationInput[]
    by: HighlightScalarFieldEnum[] | HighlightScalarFieldEnum
    having?: HighlightScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HighlightCountAggregateInputType | true
    _avg?: HighlightAvgAggregateInputType
    _sum?: HighlightSumAggregateInputType
    _min?: HighlightMinAggregateInputType
    _max?: HighlightMaxAggregateInputType
  }

  export type HighlightGroupByOutputType = {
    id: string
    text: string
    color: string | null
    page: number | null
    position: JsonValue | null
    createdAt: Date
    userId: string
    bookId: string
    _count: HighlightCountAggregateOutputType | null
    _avg: HighlightAvgAggregateOutputType | null
    _sum: HighlightSumAggregateOutputType | null
    _min: HighlightMinAggregateOutputType | null
    _max: HighlightMaxAggregateOutputType | null
  }

  type GetHighlightGroupByPayload<T extends HighlightGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HighlightGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HighlightGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HighlightGroupByOutputType[P]>
            : GetScalarType<T[P], HighlightGroupByOutputType[P]>
        }
      >
    >


  export type HighlightSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    color?: boolean
    page?: boolean
    position?: boolean
    createdAt?: boolean
    userId?: boolean
    bookId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
    note?: boolean | Highlight$noteArgs<ExtArgs>
  }, ExtArgs["result"]["highlight"]>

  export type HighlightSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    color?: boolean
    page?: boolean
    position?: boolean
    createdAt?: boolean
    userId?: boolean
    bookId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["highlight"]>

  export type HighlightSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    color?: boolean
    page?: boolean
    position?: boolean
    createdAt?: boolean
    userId?: boolean
    bookId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["highlight"]>

  export type HighlightSelectScalar = {
    id?: boolean
    text?: boolean
    color?: boolean
    page?: boolean
    position?: boolean
    createdAt?: boolean
    userId?: boolean
    bookId?: boolean
  }

  export type HighlightOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "color" | "page" | "position" | "createdAt" | "userId" | "bookId", ExtArgs["result"]["highlight"]>
  export type HighlightInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
    note?: boolean | Highlight$noteArgs<ExtArgs>
  }
  export type HighlightIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type HighlightIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }

  export type $HighlightPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Highlight"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      book: Prisma.$BookPayload<ExtArgs>
      note: Prisma.$NotePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      color: string | null
      page: number | null
      position: Prisma.JsonValue | null
      createdAt: Date
      userId: string
      bookId: string
    }, ExtArgs["result"]["highlight"]>
    composites: {}
  }

  type HighlightGetPayload<S extends boolean | null | undefined | HighlightDefaultArgs> = $Result.GetResult<Prisma.$HighlightPayload, S>

  type HighlightCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HighlightFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HighlightCountAggregateInputType | true
    }

  export interface HighlightDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Highlight'], meta: { name: 'Highlight' } }
    /**
     * Find zero or one Highlight that matches the filter.
     * @param {HighlightFindUniqueArgs} args - Arguments to find a Highlight
     * @example
     * // Get one Highlight
     * const highlight = await prisma.highlight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HighlightFindUniqueArgs>(args: SelectSubset<T, HighlightFindUniqueArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Highlight that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HighlightFindUniqueOrThrowArgs} args - Arguments to find a Highlight
     * @example
     * // Get one Highlight
     * const highlight = await prisma.highlight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HighlightFindUniqueOrThrowArgs>(args: SelectSubset<T, HighlightFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Highlight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightFindFirstArgs} args - Arguments to find a Highlight
     * @example
     * // Get one Highlight
     * const highlight = await prisma.highlight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HighlightFindFirstArgs>(args?: SelectSubset<T, HighlightFindFirstArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Highlight that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightFindFirstOrThrowArgs} args - Arguments to find a Highlight
     * @example
     * // Get one Highlight
     * const highlight = await prisma.highlight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HighlightFindFirstOrThrowArgs>(args?: SelectSubset<T, HighlightFindFirstOrThrowArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Highlights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Highlights
     * const highlights = await prisma.highlight.findMany()
     * 
     * // Get first 10 Highlights
     * const highlights = await prisma.highlight.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const highlightWithIdOnly = await prisma.highlight.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HighlightFindManyArgs>(args?: SelectSubset<T, HighlightFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Highlight.
     * @param {HighlightCreateArgs} args - Arguments to create a Highlight.
     * @example
     * // Create one Highlight
     * const Highlight = await prisma.highlight.create({
     *   data: {
     *     // ... data to create a Highlight
     *   }
     * })
     * 
     */
    create<T extends HighlightCreateArgs>(args: SelectSubset<T, HighlightCreateArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Highlights.
     * @param {HighlightCreateManyArgs} args - Arguments to create many Highlights.
     * @example
     * // Create many Highlights
     * const highlight = await prisma.highlight.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HighlightCreateManyArgs>(args?: SelectSubset<T, HighlightCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Highlights and returns the data saved in the database.
     * @param {HighlightCreateManyAndReturnArgs} args - Arguments to create many Highlights.
     * @example
     * // Create many Highlights
     * const highlight = await prisma.highlight.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Highlights and only return the `id`
     * const highlightWithIdOnly = await prisma.highlight.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HighlightCreateManyAndReturnArgs>(args?: SelectSubset<T, HighlightCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Highlight.
     * @param {HighlightDeleteArgs} args - Arguments to delete one Highlight.
     * @example
     * // Delete one Highlight
     * const Highlight = await prisma.highlight.delete({
     *   where: {
     *     // ... filter to delete one Highlight
     *   }
     * })
     * 
     */
    delete<T extends HighlightDeleteArgs>(args: SelectSubset<T, HighlightDeleteArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Highlight.
     * @param {HighlightUpdateArgs} args - Arguments to update one Highlight.
     * @example
     * // Update one Highlight
     * const highlight = await prisma.highlight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HighlightUpdateArgs>(args: SelectSubset<T, HighlightUpdateArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Highlights.
     * @param {HighlightDeleteManyArgs} args - Arguments to filter Highlights to delete.
     * @example
     * // Delete a few Highlights
     * const { count } = await prisma.highlight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HighlightDeleteManyArgs>(args?: SelectSubset<T, HighlightDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Highlights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Highlights
     * const highlight = await prisma.highlight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HighlightUpdateManyArgs>(args: SelectSubset<T, HighlightUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Highlights and returns the data updated in the database.
     * @param {HighlightUpdateManyAndReturnArgs} args - Arguments to update many Highlights.
     * @example
     * // Update many Highlights
     * const highlight = await prisma.highlight.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Highlights and only return the `id`
     * const highlightWithIdOnly = await prisma.highlight.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HighlightUpdateManyAndReturnArgs>(args: SelectSubset<T, HighlightUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Highlight.
     * @param {HighlightUpsertArgs} args - Arguments to update or create a Highlight.
     * @example
     * // Update or create a Highlight
     * const highlight = await prisma.highlight.upsert({
     *   create: {
     *     // ... data to create a Highlight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Highlight we want to update
     *   }
     * })
     */
    upsert<T extends HighlightUpsertArgs>(args: SelectSubset<T, HighlightUpsertArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Highlights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightCountArgs} args - Arguments to filter Highlights to count.
     * @example
     * // Count the number of Highlights
     * const count = await prisma.highlight.count({
     *   where: {
     *     // ... the filter for the Highlights we want to count
     *   }
     * })
    **/
    count<T extends HighlightCountArgs>(
      args?: Subset<T, HighlightCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HighlightCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Highlight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HighlightAggregateArgs>(args: Subset<T, HighlightAggregateArgs>): Prisma.PrismaPromise<GetHighlightAggregateType<T>>

    /**
     * Group by Highlight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HighlightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HighlightGroupByArgs['orderBy'] }
        : { orderBy?: HighlightGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HighlightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHighlightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Highlight model
   */
  readonly fields: HighlightFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Highlight.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HighlightClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    note<T extends Highlight$noteArgs<ExtArgs> = {}>(args?: Subset<T, Highlight$noteArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Highlight model
   */
  interface HighlightFieldRefs {
    readonly id: FieldRef<"Highlight", 'String'>
    readonly text: FieldRef<"Highlight", 'String'>
    readonly color: FieldRef<"Highlight", 'String'>
    readonly page: FieldRef<"Highlight", 'Int'>
    readonly position: FieldRef<"Highlight", 'Json'>
    readonly createdAt: FieldRef<"Highlight", 'DateTime'>
    readonly userId: FieldRef<"Highlight", 'String'>
    readonly bookId: FieldRef<"Highlight", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Highlight findUnique
   */
  export type HighlightFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    /**
     * Filter, which Highlight to fetch.
     */
    where: HighlightWhereUniqueInput
  }

  /**
   * Highlight findUniqueOrThrow
   */
  export type HighlightFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    /**
     * Filter, which Highlight to fetch.
     */
    where: HighlightWhereUniqueInput
  }

  /**
   * Highlight findFirst
   */
  export type HighlightFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    /**
     * Filter, which Highlight to fetch.
     */
    where?: HighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Highlights to fetch.
     */
    orderBy?: HighlightOrderByWithRelationInput | HighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Highlights.
     */
    cursor?: HighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Highlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Highlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Highlights.
     */
    distinct?: HighlightScalarFieldEnum | HighlightScalarFieldEnum[]
  }

  /**
   * Highlight findFirstOrThrow
   */
  export type HighlightFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    /**
     * Filter, which Highlight to fetch.
     */
    where?: HighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Highlights to fetch.
     */
    orderBy?: HighlightOrderByWithRelationInput | HighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Highlights.
     */
    cursor?: HighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Highlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Highlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Highlights.
     */
    distinct?: HighlightScalarFieldEnum | HighlightScalarFieldEnum[]
  }

  /**
   * Highlight findMany
   */
  export type HighlightFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    /**
     * Filter, which Highlights to fetch.
     */
    where?: HighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Highlights to fetch.
     */
    orderBy?: HighlightOrderByWithRelationInput | HighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Highlights.
     */
    cursor?: HighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Highlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Highlights.
     */
    skip?: number
    distinct?: HighlightScalarFieldEnum | HighlightScalarFieldEnum[]
  }

  /**
   * Highlight create
   */
  export type HighlightCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    /**
     * The data needed to create a Highlight.
     */
    data: XOR<HighlightCreateInput, HighlightUncheckedCreateInput>
  }

  /**
   * Highlight createMany
   */
  export type HighlightCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Highlights.
     */
    data: HighlightCreateManyInput | HighlightCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Highlight createManyAndReturn
   */
  export type HighlightCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * The data used to create many Highlights.
     */
    data: HighlightCreateManyInput | HighlightCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Highlight update
   */
  export type HighlightUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    /**
     * The data needed to update a Highlight.
     */
    data: XOR<HighlightUpdateInput, HighlightUncheckedUpdateInput>
    /**
     * Choose, which Highlight to update.
     */
    where: HighlightWhereUniqueInput
  }

  /**
   * Highlight updateMany
   */
  export type HighlightUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Highlights.
     */
    data: XOR<HighlightUpdateManyMutationInput, HighlightUncheckedUpdateManyInput>
    /**
     * Filter which Highlights to update
     */
    where?: HighlightWhereInput
    /**
     * Limit how many Highlights to update.
     */
    limit?: number
  }

  /**
   * Highlight updateManyAndReturn
   */
  export type HighlightUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * The data used to update Highlights.
     */
    data: XOR<HighlightUpdateManyMutationInput, HighlightUncheckedUpdateManyInput>
    /**
     * Filter which Highlights to update
     */
    where?: HighlightWhereInput
    /**
     * Limit how many Highlights to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Highlight upsert
   */
  export type HighlightUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    /**
     * The filter to search for the Highlight to update in case it exists.
     */
    where: HighlightWhereUniqueInput
    /**
     * In case the Highlight found by the `where` argument doesn't exist, create a new Highlight with this data.
     */
    create: XOR<HighlightCreateInput, HighlightUncheckedCreateInput>
    /**
     * In case the Highlight was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HighlightUpdateInput, HighlightUncheckedUpdateInput>
  }

  /**
   * Highlight delete
   */
  export type HighlightDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    /**
     * Filter which Highlight to delete.
     */
    where: HighlightWhereUniqueInput
  }

  /**
   * Highlight deleteMany
   */
  export type HighlightDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Highlights to delete
     */
    where?: HighlightWhereInput
    /**
     * Limit how many Highlights to delete.
     */
    limit?: number
  }

  /**
   * Highlight.note
   */
  export type Highlight$noteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    where?: NoteWhereInput
  }

  /**
   * Highlight without action
   */
  export type HighlightDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
  }


  /**
   * Model Note
   */

  export type AggregateNote = {
    _count: NoteCountAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  export type NoteMinAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    bookId: string | null
    highlightId: string | null
  }

  export type NoteMaxAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    bookId: string | null
    highlightId: string | null
  }

  export type NoteCountAggregateOutputType = {
    id: number
    content: number
    createdAt: number
    updatedAt: number
    userId: number
    bookId: number
    highlightId: number
    _all: number
  }


  export type NoteMinAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    bookId?: true
    highlightId?: true
  }

  export type NoteMaxAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    bookId?: true
    highlightId?: true
  }

  export type NoteCountAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    bookId?: true
    highlightId?: true
    _all?: true
  }

  export type NoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Note to aggregate.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notes
    **/
    _count?: true | NoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoteMaxAggregateInputType
  }

  export type GetNoteAggregateType<T extends NoteAggregateArgs> = {
        [P in keyof T & keyof AggregateNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNote[P]>
      : GetScalarType<T[P], AggregateNote[P]>
  }




  export type NoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithAggregationInput | NoteOrderByWithAggregationInput[]
    by: NoteScalarFieldEnum[] | NoteScalarFieldEnum
    having?: NoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoteCountAggregateInputType | true
    _min?: NoteMinAggregateInputType
    _max?: NoteMaxAggregateInputType
  }

  export type NoteGroupByOutputType = {
    id: string
    content: string
    createdAt: Date
    updatedAt: Date
    userId: string
    bookId: string
    highlightId: string | null
    _count: NoteCountAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  type GetNoteGroupByPayload<T extends NoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteGroupByOutputType[P]>
            : GetScalarType<T[P], NoteGroupByOutputType[P]>
        }
      >
    >


  export type NoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    bookId?: boolean
    highlightId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
    highlight?: boolean | Note$highlightArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    bookId?: boolean
    highlightId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
    highlight?: boolean | Note$highlightArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    bookId?: boolean
    highlightId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
    highlight?: boolean | Note$highlightArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectScalar = {
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    bookId?: boolean
    highlightId?: boolean
  }

  export type NoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "createdAt" | "updatedAt" | "userId" | "bookId" | "highlightId", ExtArgs["result"]["note"]>
  export type NoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
    highlight?: boolean | Note$highlightArgs<ExtArgs>
  }
  export type NoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
    highlight?: boolean | Note$highlightArgs<ExtArgs>
  }
  export type NoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
    highlight?: boolean | Note$highlightArgs<ExtArgs>
  }

  export type $NotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Note"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      book: Prisma.$BookPayload<ExtArgs>
      highlight: Prisma.$HighlightPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      createdAt: Date
      updatedAt: Date
      userId: string
      bookId: string
      highlightId: string | null
    }, ExtArgs["result"]["note"]>
    composites: {}
  }

  type NoteGetPayload<S extends boolean | null | undefined | NoteDefaultArgs> = $Result.GetResult<Prisma.$NotePayload, S>

  type NoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoteCountAggregateInputType | true
    }

  export interface NoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Note'], meta: { name: 'Note' } }
    /**
     * Find zero or one Note that matches the filter.
     * @param {NoteFindUniqueArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoteFindUniqueArgs>(args: SelectSubset<T, NoteFindUniqueArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Note that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoteFindUniqueOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoteFindUniqueOrThrowArgs>(args: SelectSubset<T, NoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoteFindFirstArgs>(args?: SelectSubset<T, NoteFindFirstArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoteFindFirstOrThrowArgs>(args?: SelectSubset<T, NoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.note.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.note.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noteWithIdOnly = await prisma.note.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoteFindManyArgs>(args?: SelectSubset<T, NoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Note.
     * @param {NoteCreateArgs} args - Arguments to create a Note.
     * @example
     * // Create one Note
     * const Note = await prisma.note.create({
     *   data: {
     *     // ... data to create a Note
     *   }
     * })
     * 
     */
    create<T extends NoteCreateArgs>(args: SelectSubset<T, NoteCreateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notes.
     * @param {NoteCreateManyArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoteCreateManyArgs>(args?: SelectSubset<T, NoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notes and returns the data saved in the database.
     * @param {NoteCreateManyAndReturnArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notes and only return the `id`
     * const noteWithIdOnly = await prisma.note.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoteCreateManyAndReturnArgs>(args?: SelectSubset<T, NoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Note.
     * @param {NoteDeleteArgs} args - Arguments to delete one Note.
     * @example
     * // Delete one Note
     * const Note = await prisma.note.delete({
     *   where: {
     *     // ... filter to delete one Note
     *   }
     * })
     * 
     */
    delete<T extends NoteDeleteArgs>(args: SelectSubset<T, NoteDeleteArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Note.
     * @param {NoteUpdateArgs} args - Arguments to update one Note.
     * @example
     * // Update one Note
     * const note = await prisma.note.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoteUpdateArgs>(args: SelectSubset<T, NoteUpdateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notes.
     * @param {NoteDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.note.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoteDeleteManyArgs>(args?: SelectSubset<T, NoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoteUpdateManyArgs>(args: SelectSubset<T, NoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes and returns the data updated in the database.
     * @param {NoteUpdateManyAndReturnArgs} args - Arguments to update many Notes.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notes and only return the `id`
     * const noteWithIdOnly = await prisma.note.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NoteUpdateManyAndReturnArgs>(args: SelectSubset<T, NoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Note.
     * @param {NoteUpsertArgs} args - Arguments to update or create a Note.
     * @example
     * // Update or create a Note
     * const note = await prisma.note.upsert({
     *   create: {
     *     // ... data to create a Note
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Note we want to update
     *   }
     * })
     */
    upsert<T extends NoteUpsertArgs>(args: SelectSubset<T, NoteUpsertArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.note.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends NoteCountArgs>(
      args?: Subset<T, NoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NoteAggregateArgs>(args: Subset<T, NoteAggregateArgs>): Prisma.PrismaPromise<GetNoteAggregateType<T>>

    /**
     * Group by Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoteGroupByArgs['orderBy'] }
        : { orderBy?: NoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Note model
   */
  readonly fields: NoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Note.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    highlight<T extends Note$highlightArgs<ExtArgs> = {}>(args?: Subset<T, Note$highlightArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Note model
   */
  interface NoteFieldRefs {
    readonly id: FieldRef<"Note", 'String'>
    readonly content: FieldRef<"Note", 'String'>
    readonly createdAt: FieldRef<"Note", 'DateTime'>
    readonly updatedAt: FieldRef<"Note", 'DateTime'>
    readonly userId: FieldRef<"Note", 'String'>
    readonly bookId: FieldRef<"Note", 'String'>
    readonly highlightId: FieldRef<"Note", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Note findUnique
   */
  export type NoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findUniqueOrThrow
   */
  export type NoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findFirst
   */
  export type NoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findFirstOrThrow
   */
  export type NoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findMany
   */
  export type NoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note create
   */
  export type NoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Note.
     */
    data: XOR<NoteCreateInput, NoteUncheckedCreateInput>
  }

  /**
   * Note createMany
   */
  export type NoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Note createManyAndReturn
   */
  export type NoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Note update
   */
  export type NoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Note.
     */
    data: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
    /**
     * Choose, which Note to update.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note updateMany
   */
  export type NoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
  }

  /**
   * Note updateManyAndReturn
   */
  export type NoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Note upsert
   */
  export type NoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Note to update in case it exists.
     */
    where: NoteWhereUniqueInput
    /**
     * In case the Note found by the `where` argument doesn't exist, create a new Note with this data.
     */
    create: XOR<NoteCreateInput, NoteUncheckedCreateInput>
    /**
     * In case the Note was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
  }

  /**
   * Note delete
   */
  export type NoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter which Note to delete.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note deleteMany
   */
  export type NoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notes to delete
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to delete.
     */
    limit?: number
  }

  /**
   * Note.highlight
   */
  export type Note$highlightArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    where?: HighlightWhereInput
  }

  /**
   * Note without action
   */
  export type NoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
  }


  /**
   * Model Conversation
   */

  export type AggregateConversation = {
    _count: ConversationCountAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  export type ConversationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    bookId: string | null
  }

  export type ConversationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    bookId: string | null
  }

  export type ConversationCountAggregateOutputType = {
    id: number
    userId: number
    bookId: number
    _all: number
  }


  export type ConversationMinAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
  }

  export type ConversationMaxAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
  }

  export type ConversationCountAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
    _all?: true
  }

  export type ConversationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversation to aggregate.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conversations
    **/
    _count?: true | ConversationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationMaxAggregateInputType
  }

  export type GetConversationAggregateType<T extends ConversationAggregateArgs> = {
        [P in keyof T & keyof AggregateConversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversation[P]>
      : GetScalarType<T[P], AggregateConversation[P]>
  }




  export type ConversationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithAggregationInput | ConversationOrderByWithAggregationInput[]
    by: ConversationScalarFieldEnum[] | ConversationScalarFieldEnum
    having?: ConversationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationCountAggregateInputType | true
    _min?: ConversationMinAggregateInputType
    _max?: ConversationMaxAggregateInputType
  }

  export type ConversationGroupByOutputType = {
    id: string
    userId: string
    bookId: string
    _count: ConversationCountAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  type GetConversationGroupByPayload<T extends ConversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationGroupByOutputType[P]>
        }
      >
    >


  export type ConversationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bookId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bookId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bookId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectScalar = {
    id?: boolean
    userId?: boolean
    bookId?: boolean
  }

  export type ConversationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "bookId", ExtArgs["result"]["conversation"]>
  export type ConversationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type ConversationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type ConversationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }

  export type $ConversationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conversation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      book: Prisma.$BookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      bookId: string
    }, ExtArgs["result"]["conversation"]>
    composites: {}
  }

  type ConversationGetPayload<S extends boolean | null | undefined | ConversationDefaultArgs> = $Result.GetResult<Prisma.$ConversationPayload, S>

  type ConversationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversationCountAggregateInputType | true
    }

  export interface ConversationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conversation'], meta: { name: 'Conversation' } }
    /**
     * Find zero or one Conversation that matches the filter.
     * @param {ConversationFindUniqueArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversationFindUniqueArgs>(args: SelectSubset<T, ConversationFindUniqueArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conversation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversationFindUniqueOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversationFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversationFindFirstArgs>(args?: SelectSubset<T, ConversationFindFirstArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversationFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversation.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationWithIdOnly = await prisma.conversation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversationFindManyArgs>(args?: SelectSubset<T, ConversationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conversation.
     * @param {ConversationCreateArgs} args - Arguments to create a Conversation.
     * @example
     * // Create one Conversation
     * const Conversation = await prisma.conversation.create({
     *   data: {
     *     // ... data to create a Conversation
     *   }
     * })
     * 
     */
    create<T extends ConversationCreateArgs>(args: SelectSubset<T, ConversationCreateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conversations.
     * @param {ConversationCreateManyArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversationCreateManyArgs>(args?: SelectSubset<T, ConversationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conversations and returns the data saved in the database.
     * @param {ConversationCreateManyAndReturnArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conversations and only return the `id`
     * const conversationWithIdOnly = await prisma.conversation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConversationCreateManyAndReturnArgs>(args?: SelectSubset<T, ConversationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conversation.
     * @param {ConversationDeleteArgs} args - Arguments to delete one Conversation.
     * @example
     * // Delete one Conversation
     * const Conversation = await prisma.conversation.delete({
     *   where: {
     *     // ... filter to delete one Conversation
     *   }
     * })
     * 
     */
    delete<T extends ConversationDeleteArgs>(args: SelectSubset<T, ConversationDeleteArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conversation.
     * @param {ConversationUpdateArgs} args - Arguments to update one Conversation.
     * @example
     * // Update one Conversation
     * const conversation = await prisma.conversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversationUpdateArgs>(args: SelectSubset<T, ConversationUpdateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conversations.
     * @param {ConversationDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversationDeleteManyArgs>(args?: SelectSubset<T, ConversationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversationUpdateManyArgs>(args: SelectSubset<T, ConversationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations and returns the data updated in the database.
     * @param {ConversationUpdateManyAndReturnArgs} args - Arguments to update many Conversations.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conversations and only return the `id`
     * const conversationWithIdOnly = await prisma.conversation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConversationUpdateManyAndReturnArgs>(args: SelectSubset<T, ConversationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conversation.
     * @param {ConversationUpsertArgs} args - Arguments to update or create a Conversation.
     * @example
     * // Update or create a Conversation
     * const conversation = await prisma.conversation.upsert({
     *   create: {
     *     // ... data to create a Conversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversation we want to update
     *   }
     * })
     */
    upsert<T extends ConversationUpsertArgs>(args: SelectSubset<T, ConversationUpsertArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversation.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends ConversationCountArgs>(
      args?: Subset<T, ConversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConversationAggregateArgs>(args: Subset<T, ConversationAggregateArgs>): Prisma.PrismaPromise<GetConversationAggregateType<T>>

    /**
     * Group by Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConversationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationGroupByArgs['orderBy'] }
        : { orderBy?: ConversationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conversation model
   */
  readonly fields: ConversationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Conversation model
   */
  interface ConversationFieldRefs {
    readonly id: FieldRef<"Conversation", 'String'>
    readonly userId: FieldRef<"Conversation", 'String'>
    readonly bookId: FieldRef<"Conversation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Conversation findUnique
   */
  export type ConversationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findUniqueOrThrow
   */
  export type ConversationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findFirst
   */
  export type ConversationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findFirstOrThrow
   */
  export type ConversationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findMany
   */
  export type ConversationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation create
   */
  export type ConversationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to create a Conversation.
     */
    data: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
  }

  /**
   * Conversation createMany
   */
  export type ConversationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conversation createManyAndReturn
   */
  export type ConversationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversation update
   */
  export type ConversationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to update a Conversation.
     */
    data: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
    /**
     * Choose, which Conversation to update.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation updateMany
   */
  export type ConversationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
  }

  /**
   * Conversation updateManyAndReturn
   */
  export type ConversationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversation upsert
   */
  export type ConversationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The filter to search for the Conversation to update in case it exists.
     */
    where: ConversationWhereUniqueInput
    /**
     * In case the Conversation found by the `where` argument doesn't exist, create a new Conversation with this data.
     */
    create: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
    /**
     * In case the Conversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
  }

  /**
   * Conversation delete
   */
  export type ConversationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter which Conversation to delete.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation deleteMany
   */
  export type ConversationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversations to delete
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to delete.
     */
    limit?: number
  }

  /**
   * Conversation without action
   */
  export type ConversationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
  }


  /**
   * Model UserConcept
   */

  export type AggregateUserConcept = {
    _count: UserConceptCountAggregateOutputType | null
    _min: UserConceptMinAggregateOutputType | null
    _max: UserConceptMaxAggregateOutputType | null
  }

  export type UserConceptMinAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type UserConceptMaxAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type UserConceptCountAggregateOutputType = {
    id: number
    userId: number
    _all: number
  }


  export type UserConceptMinAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserConceptMaxAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserConceptCountAggregateInputType = {
    id?: true
    userId?: true
    _all?: true
  }

  export type UserConceptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserConcept to aggregate.
     */
    where?: UserConceptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserConcepts to fetch.
     */
    orderBy?: UserConceptOrderByWithRelationInput | UserConceptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserConceptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserConcepts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserConcepts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserConcepts
    **/
    _count?: true | UserConceptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserConceptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserConceptMaxAggregateInputType
  }

  export type GetUserConceptAggregateType<T extends UserConceptAggregateArgs> = {
        [P in keyof T & keyof AggregateUserConcept]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserConcept[P]>
      : GetScalarType<T[P], AggregateUserConcept[P]>
  }




  export type UserConceptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserConceptWhereInput
    orderBy?: UserConceptOrderByWithAggregationInput | UserConceptOrderByWithAggregationInput[]
    by: UserConceptScalarFieldEnum[] | UserConceptScalarFieldEnum
    having?: UserConceptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserConceptCountAggregateInputType | true
    _min?: UserConceptMinAggregateInputType
    _max?: UserConceptMaxAggregateInputType
  }

  export type UserConceptGroupByOutputType = {
    id: string
    userId: string
    _count: UserConceptCountAggregateOutputType | null
    _min: UserConceptMinAggregateOutputType | null
    _max: UserConceptMaxAggregateOutputType | null
  }

  type GetUserConceptGroupByPayload<T extends UserConceptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserConceptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserConceptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserConceptGroupByOutputType[P]>
            : GetScalarType<T[P], UserConceptGroupByOutputType[P]>
        }
      >
    >


  export type UserConceptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userConcept"]>

  export type UserConceptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userConcept"]>

  export type UserConceptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userConcept"]>

  export type UserConceptSelectScalar = {
    id?: boolean
    userId?: boolean
  }

  export type UserConceptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId", ExtArgs["result"]["userConcept"]>
  export type UserConceptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserConceptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserConceptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserConceptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserConcept"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
    }, ExtArgs["result"]["userConcept"]>
    composites: {}
  }

  type UserConceptGetPayload<S extends boolean | null | undefined | UserConceptDefaultArgs> = $Result.GetResult<Prisma.$UserConceptPayload, S>

  type UserConceptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserConceptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserConceptCountAggregateInputType | true
    }

  export interface UserConceptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserConcept'], meta: { name: 'UserConcept' } }
    /**
     * Find zero or one UserConcept that matches the filter.
     * @param {UserConceptFindUniqueArgs} args - Arguments to find a UserConcept
     * @example
     * // Get one UserConcept
     * const userConcept = await prisma.userConcept.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserConceptFindUniqueArgs>(args: SelectSubset<T, UserConceptFindUniqueArgs<ExtArgs>>): Prisma__UserConceptClient<$Result.GetResult<Prisma.$UserConceptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserConcept that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserConceptFindUniqueOrThrowArgs} args - Arguments to find a UserConcept
     * @example
     * // Get one UserConcept
     * const userConcept = await prisma.userConcept.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserConceptFindUniqueOrThrowArgs>(args: SelectSubset<T, UserConceptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserConceptClient<$Result.GetResult<Prisma.$UserConceptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserConcept that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserConceptFindFirstArgs} args - Arguments to find a UserConcept
     * @example
     * // Get one UserConcept
     * const userConcept = await prisma.userConcept.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserConceptFindFirstArgs>(args?: SelectSubset<T, UserConceptFindFirstArgs<ExtArgs>>): Prisma__UserConceptClient<$Result.GetResult<Prisma.$UserConceptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserConcept that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserConceptFindFirstOrThrowArgs} args - Arguments to find a UserConcept
     * @example
     * // Get one UserConcept
     * const userConcept = await prisma.userConcept.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserConceptFindFirstOrThrowArgs>(args?: SelectSubset<T, UserConceptFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserConceptClient<$Result.GetResult<Prisma.$UserConceptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserConcepts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserConceptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserConcepts
     * const userConcepts = await prisma.userConcept.findMany()
     * 
     * // Get first 10 UserConcepts
     * const userConcepts = await prisma.userConcept.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userConceptWithIdOnly = await prisma.userConcept.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserConceptFindManyArgs>(args?: SelectSubset<T, UserConceptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserConceptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserConcept.
     * @param {UserConceptCreateArgs} args - Arguments to create a UserConcept.
     * @example
     * // Create one UserConcept
     * const UserConcept = await prisma.userConcept.create({
     *   data: {
     *     // ... data to create a UserConcept
     *   }
     * })
     * 
     */
    create<T extends UserConceptCreateArgs>(args: SelectSubset<T, UserConceptCreateArgs<ExtArgs>>): Prisma__UserConceptClient<$Result.GetResult<Prisma.$UserConceptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserConcepts.
     * @param {UserConceptCreateManyArgs} args - Arguments to create many UserConcepts.
     * @example
     * // Create many UserConcepts
     * const userConcept = await prisma.userConcept.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserConceptCreateManyArgs>(args?: SelectSubset<T, UserConceptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserConcepts and returns the data saved in the database.
     * @param {UserConceptCreateManyAndReturnArgs} args - Arguments to create many UserConcepts.
     * @example
     * // Create many UserConcepts
     * const userConcept = await prisma.userConcept.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserConcepts and only return the `id`
     * const userConceptWithIdOnly = await prisma.userConcept.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserConceptCreateManyAndReturnArgs>(args?: SelectSubset<T, UserConceptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserConceptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserConcept.
     * @param {UserConceptDeleteArgs} args - Arguments to delete one UserConcept.
     * @example
     * // Delete one UserConcept
     * const UserConcept = await prisma.userConcept.delete({
     *   where: {
     *     // ... filter to delete one UserConcept
     *   }
     * })
     * 
     */
    delete<T extends UserConceptDeleteArgs>(args: SelectSubset<T, UserConceptDeleteArgs<ExtArgs>>): Prisma__UserConceptClient<$Result.GetResult<Prisma.$UserConceptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserConcept.
     * @param {UserConceptUpdateArgs} args - Arguments to update one UserConcept.
     * @example
     * // Update one UserConcept
     * const userConcept = await prisma.userConcept.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserConceptUpdateArgs>(args: SelectSubset<T, UserConceptUpdateArgs<ExtArgs>>): Prisma__UserConceptClient<$Result.GetResult<Prisma.$UserConceptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserConcepts.
     * @param {UserConceptDeleteManyArgs} args - Arguments to filter UserConcepts to delete.
     * @example
     * // Delete a few UserConcepts
     * const { count } = await prisma.userConcept.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserConceptDeleteManyArgs>(args?: SelectSubset<T, UserConceptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserConcepts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserConceptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserConcepts
     * const userConcept = await prisma.userConcept.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserConceptUpdateManyArgs>(args: SelectSubset<T, UserConceptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserConcepts and returns the data updated in the database.
     * @param {UserConceptUpdateManyAndReturnArgs} args - Arguments to update many UserConcepts.
     * @example
     * // Update many UserConcepts
     * const userConcept = await prisma.userConcept.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserConcepts and only return the `id`
     * const userConceptWithIdOnly = await prisma.userConcept.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserConceptUpdateManyAndReturnArgs>(args: SelectSubset<T, UserConceptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserConceptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserConcept.
     * @param {UserConceptUpsertArgs} args - Arguments to update or create a UserConcept.
     * @example
     * // Update or create a UserConcept
     * const userConcept = await prisma.userConcept.upsert({
     *   create: {
     *     // ... data to create a UserConcept
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserConcept we want to update
     *   }
     * })
     */
    upsert<T extends UserConceptUpsertArgs>(args: SelectSubset<T, UserConceptUpsertArgs<ExtArgs>>): Prisma__UserConceptClient<$Result.GetResult<Prisma.$UserConceptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserConcepts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserConceptCountArgs} args - Arguments to filter UserConcepts to count.
     * @example
     * // Count the number of UserConcepts
     * const count = await prisma.userConcept.count({
     *   where: {
     *     // ... the filter for the UserConcepts we want to count
     *   }
     * })
    **/
    count<T extends UserConceptCountArgs>(
      args?: Subset<T, UserConceptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserConceptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserConcept.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserConceptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserConceptAggregateArgs>(args: Subset<T, UserConceptAggregateArgs>): Prisma.PrismaPromise<GetUserConceptAggregateType<T>>

    /**
     * Group by UserConcept.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserConceptGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserConceptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserConceptGroupByArgs['orderBy'] }
        : { orderBy?: UserConceptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserConceptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserConceptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserConcept model
   */
  readonly fields: UserConceptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserConcept.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserConceptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserConcept model
   */
  interface UserConceptFieldRefs {
    readonly id: FieldRef<"UserConcept", 'String'>
    readonly userId: FieldRef<"UserConcept", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserConcept findUnique
   */
  export type UserConceptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserConcept
     */
    select?: UserConceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserConcept
     */
    omit?: UserConceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConceptInclude<ExtArgs> | null
    /**
     * Filter, which UserConcept to fetch.
     */
    where: UserConceptWhereUniqueInput
  }

  /**
   * UserConcept findUniqueOrThrow
   */
  export type UserConceptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserConcept
     */
    select?: UserConceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserConcept
     */
    omit?: UserConceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConceptInclude<ExtArgs> | null
    /**
     * Filter, which UserConcept to fetch.
     */
    where: UserConceptWhereUniqueInput
  }

  /**
   * UserConcept findFirst
   */
  export type UserConceptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserConcept
     */
    select?: UserConceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserConcept
     */
    omit?: UserConceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConceptInclude<ExtArgs> | null
    /**
     * Filter, which UserConcept to fetch.
     */
    where?: UserConceptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserConcepts to fetch.
     */
    orderBy?: UserConceptOrderByWithRelationInput | UserConceptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserConcepts.
     */
    cursor?: UserConceptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserConcepts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserConcepts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserConcepts.
     */
    distinct?: UserConceptScalarFieldEnum | UserConceptScalarFieldEnum[]
  }

  /**
   * UserConcept findFirstOrThrow
   */
  export type UserConceptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserConcept
     */
    select?: UserConceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserConcept
     */
    omit?: UserConceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConceptInclude<ExtArgs> | null
    /**
     * Filter, which UserConcept to fetch.
     */
    where?: UserConceptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserConcepts to fetch.
     */
    orderBy?: UserConceptOrderByWithRelationInput | UserConceptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserConcepts.
     */
    cursor?: UserConceptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserConcepts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserConcepts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserConcepts.
     */
    distinct?: UserConceptScalarFieldEnum | UserConceptScalarFieldEnum[]
  }

  /**
   * UserConcept findMany
   */
  export type UserConceptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserConcept
     */
    select?: UserConceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserConcept
     */
    omit?: UserConceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConceptInclude<ExtArgs> | null
    /**
     * Filter, which UserConcepts to fetch.
     */
    where?: UserConceptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserConcepts to fetch.
     */
    orderBy?: UserConceptOrderByWithRelationInput | UserConceptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserConcepts.
     */
    cursor?: UserConceptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserConcepts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserConcepts.
     */
    skip?: number
    distinct?: UserConceptScalarFieldEnum | UserConceptScalarFieldEnum[]
  }

  /**
   * UserConcept create
   */
  export type UserConceptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserConcept
     */
    select?: UserConceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserConcept
     */
    omit?: UserConceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConceptInclude<ExtArgs> | null
    /**
     * The data needed to create a UserConcept.
     */
    data: XOR<UserConceptCreateInput, UserConceptUncheckedCreateInput>
  }

  /**
   * UserConcept createMany
   */
  export type UserConceptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserConcepts.
     */
    data: UserConceptCreateManyInput | UserConceptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserConcept createManyAndReturn
   */
  export type UserConceptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserConcept
     */
    select?: UserConceptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserConcept
     */
    omit?: UserConceptOmit<ExtArgs> | null
    /**
     * The data used to create many UserConcepts.
     */
    data: UserConceptCreateManyInput | UserConceptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConceptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserConcept update
   */
  export type UserConceptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserConcept
     */
    select?: UserConceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserConcept
     */
    omit?: UserConceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConceptInclude<ExtArgs> | null
    /**
     * The data needed to update a UserConcept.
     */
    data: XOR<UserConceptUpdateInput, UserConceptUncheckedUpdateInput>
    /**
     * Choose, which UserConcept to update.
     */
    where: UserConceptWhereUniqueInput
  }

  /**
   * UserConcept updateMany
   */
  export type UserConceptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserConcepts.
     */
    data: XOR<UserConceptUpdateManyMutationInput, UserConceptUncheckedUpdateManyInput>
    /**
     * Filter which UserConcepts to update
     */
    where?: UserConceptWhereInput
    /**
     * Limit how many UserConcepts to update.
     */
    limit?: number
  }

  /**
   * UserConcept updateManyAndReturn
   */
  export type UserConceptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserConcept
     */
    select?: UserConceptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserConcept
     */
    omit?: UserConceptOmit<ExtArgs> | null
    /**
     * The data used to update UserConcepts.
     */
    data: XOR<UserConceptUpdateManyMutationInput, UserConceptUncheckedUpdateManyInput>
    /**
     * Filter which UserConcepts to update
     */
    where?: UserConceptWhereInput
    /**
     * Limit how many UserConcepts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConceptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserConcept upsert
   */
  export type UserConceptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserConcept
     */
    select?: UserConceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserConcept
     */
    omit?: UserConceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConceptInclude<ExtArgs> | null
    /**
     * The filter to search for the UserConcept to update in case it exists.
     */
    where: UserConceptWhereUniqueInput
    /**
     * In case the UserConcept found by the `where` argument doesn't exist, create a new UserConcept with this data.
     */
    create: XOR<UserConceptCreateInput, UserConceptUncheckedCreateInput>
    /**
     * In case the UserConcept was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserConceptUpdateInput, UserConceptUncheckedUpdateInput>
  }

  /**
   * UserConcept delete
   */
  export type UserConceptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserConcept
     */
    select?: UserConceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserConcept
     */
    omit?: UserConceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConceptInclude<ExtArgs> | null
    /**
     * Filter which UserConcept to delete.
     */
    where: UserConceptWhereUniqueInput
  }

  /**
   * UserConcept deleteMany
   */
  export type UserConceptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserConcepts to delete
     */
    where?: UserConceptWhereInput
    /**
     * Limit how many UserConcepts to delete.
     */
    limit?: number
  }

  /**
   * UserConcept without action
   */
  export type UserConceptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserConcept
     */
    select?: UserConceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserConcept
     */
    omit?: UserConceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConceptInclude<ExtArgs> | null
  }


  /**
   * Model BookConcept
   */

  export type AggregateBookConcept = {
    _count: BookConceptCountAggregateOutputType | null
    _min: BookConceptMinAggregateOutputType | null
    _max: BookConceptMaxAggregateOutputType | null
  }

  export type BookConceptMinAggregateOutputType = {
    id: string | null
    bookId: string | null
  }

  export type BookConceptMaxAggregateOutputType = {
    id: string | null
    bookId: string | null
  }

  export type BookConceptCountAggregateOutputType = {
    id: number
    bookId: number
    _all: number
  }


  export type BookConceptMinAggregateInputType = {
    id?: true
    bookId?: true
  }

  export type BookConceptMaxAggregateInputType = {
    id?: true
    bookId?: true
  }

  export type BookConceptCountAggregateInputType = {
    id?: true
    bookId?: true
    _all?: true
  }

  export type BookConceptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookConcept to aggregate.
     */
    where?: BookConceptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookConcepts to fetch.
     */
    orderBy?: BookConceptOrderByWithRelationInput | BookConceptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookConceptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookConcepts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookConcepts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookConcepts
    **/
    _count?: true | BookConceptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookConceptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookConceptMaxAggregateInputType
  }

  export type GetBookConceptAggregateType<T extends BookConceptAggregateArgs> = {
        [P in keyof T & keyof AggregateBookConcept]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookConcept[P]>
      : GetScalarType<T[P], AggregateBookConcept[P]>
  }




  export type BookConceptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookConceptWhereInput
    orderBy?: BookConceptOrderByWithAggregationInput | BookConceptOrderByWithAggregationInput[]
    by: BookConceptScalarFieldEnum[] | BookConceptScalarFieldEnum
    having?: BookConceptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookConceptCountAggregateInputType | true
    _min?: BookConceptMinAggregateInputType
    _max?: BookConceptMaxAggregateInputType
  }

  export type BookConceptGroupByOutputType = {
    id: string
    bookId: string
    _count: BookConceptCountAggregateOutputType | null
    _min: BookConceptMinAggregateOutputType | null
    _max: BookConceptMaxAggregateOutputType | null
  }

  type GetBookConceptGroupByPayload<T extends BookConceptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookConceptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookConceptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookConceptGroupByOutputType[P]>
            : GetScalarType<T[P], BookConceptGroupByOutputType[P]>
        }
      >
    >


  export type BookConceptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookConcept"]>

  export type BookConceptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookConcept"]>

  export type BookConceptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookConcept"]>

  export type BookConceptSelectScalar = {
    id?: boolean
    bookId?: boolean
  }

  export type BookConceptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookId", ExtArgs["result"]["bookConcept"]>
  export type BookConceptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type BookConceptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type BookConceptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }

  export type $BookConceptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookConcept"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookId: string
    }, ExtArgs["result"]["bookConcept"]>
    composites: {}
  }

  type BookConceptGetPayload<S extends boolean | null | undefined | BookConceptDefaultArgs> = $Result.GetResult<Prisma.$BookConceptPayload, S>

  type BookConceptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookConceptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookConceptCountAggregateInputType | true
    }

  export interface BookConceptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookConcept'], meta: { name: 'BookConcept' } }
    /**
     * Find zero or one BookConcept that matches the filter.
     * @param {BookConceptFindUniqueArgs} args - Arguments to find a BookConcept
     * @example
     * // Get one BookConcept
     * const bookConcept = await prisma.bookConcept.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookConceptFindUniqueArgs>(args: SelectSubset<T, BookConceptFindUniqueArgs<ExtArgs>>): Prisma__BookConceptClient<$Result.GetResult<Prisma.$BookConceptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookConcept that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookConceptFindUniqueOrThrowArgs} args - Arguments to find a BookConcept
     * @example
     * // Get one BookConcept
     * const bookConcept = await prisma.bookConcept.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookConceptFindUniqueOrThrowArgs>(args: SelectSubset<T, BookConceptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookConceptClient<$Result.GetResult<Prisma.$BookConceptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookConcept that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookConceptFindFirstArgs} args - Arguments to find a BookConcept
     * @example
     * // Get one BookConcept
     * const bookConcept = await prisma.bookConcept.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookConceptFindFirstArgs>(args?: SelectSubset<T, BookConceptFindFirstArgs<ExtArgs>>): Prisma__BookConceptClient<$Result.GetResult<Prisma.$BookConceptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookConcept that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookConceptFindFirstOrThrowArgs} args - Arguments to find a BookConcept
     * @example
     * // Get one BookConcept
     * const bookConcept = await prisma.bookConcept.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookConceptFindFirstOrThrowArgs>(args?: SelectSubset<T, BookConceptFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookConceptClient<$Result.GetResult<Prisma.$BookConceptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookConcepts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookConceptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookConcepts
     * const bookConcepts = await prisma.bookConcept.findMany()
     * 
     * // Get first 10 BookConcepts
     * const bookConcepts = await prisma.bookConcept.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookConceptWithIdOnly = await prisma.bookConcept.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookConceptFindManyArgs>(args?: SelectSubset<T, BookConceptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookConceptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookConcept.
     * @param {BookConceptCreateArgs} args - Arguments to create a BookConcept.
     * @example
     * // Create one BookConcept
     * const BookConcept = await prisma.bookConcept.create({
     *   data: {
     *     // ... data to create a BookConcept
     *   }
     * })
     * 
     */
    create<T extends BookConceptCreateArgs>(args: SelectSubset<T, BookConceptCreateArgs<ExtArgs>>): Prisma__BookConceptClient<$Result.GetResult<Prisma.$BookConceptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookConcepts.
     * @param {BookConceptCreateManyArgs} args - Arguments to create many BookConcepts.
     * @example
     * // Create many BookConcepts
     * const bookConcept = await prisma.bookConcept.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookConceptCreateManyArgs>(args?: SelectSubset<T, BookConceptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookConcepts and returns the data saved in the database.
     * @param {BookConceptCreateManyAndReturnArgs} args - Arguments to create many BookConcepts.
     * @example
     * // Create many BookConcepts
     * const bookConcept = await prisma.bookConcept.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookConcepts and only return the `id`
     * const bookConceptWithIdOnly = await prisma.bookConcept.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookConceptCreateManyAndReturnArgs>(args?: SelectSubset<T, BookConceptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookConceptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookConcept.
     * @param {BookConceptDeleteArgs} args - Arguments to delete one BookConcept.
     * @example
     * // Delete one BookConcept
     * const BookConcept = await prisma.bookConcept.delete({
     *   where: {
     *     // ... filter to delete one BookConcept
     *   }
     * })
     * 
     */
    delete<T extends BookConceptDeleteArgs>(args: SelectSubset<T, BookConceptDeleteArgs<ExtArgs>>): Prisma__BookConceptClient<$Result.GetResult<Prisma.$BookConceptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookConcept.
     * @param {BookConceptUpdateArgs} args - Arguments to update one BookConcept.
     * @example
     * // Update one BookConcept
     * const bookConcept = await prisma.bookConcept.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookConceptUpdateArgs>(args: SelectSubset<T, BookConceptUpdateArgs<ExtArgs>>): Prisma__BookConceptClient<$Result.GetResult<Prisma.$BookConceptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookConcepts.
     * @param {BookConceptDeleteManyArgs} args - Arguments to filter BookConcepts to delete.
     * @example
     * // Delete a few BookConcepts
     * const { count } = await prisma.bookConcept.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookConceptDeleteManyArgs>(args?: SelectSubset<T, BookConceptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookConcepts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookConceptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookConcepts
     * const bookConcept = await prisma.bookConcept.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookConceptUpdateManyArgs>(args: SelectSubset<T, BookConceptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookConcepts and returns the data updated in the database.
     * @param {BookConceptUpdateManyAndReturnArgs} args - Arguments to update many BookConcepts.
     * @example
     * // Update many BookConcepts
     * const bookConcept = await prisma.bookConcept.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookConcepts and only return the `id`
     * const bookConceptWithIdOnly = await prisma.bookConcept.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookConceptUpdateManyAndReturnArgs>(args: SelectSubset<T, BookConceptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookConceptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookConcept.
     * @param {BookConceptUpsertArgs} args - Arguments to update or create a BookConcept.
     * @example
     * // Update or create a BookConcept
     * const bookConcept = await prisma.bookConcept.upsert({
     *   create: {
     *     // ... data to create a BookConcept
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookConcept we want to update
     *   }
     * })
     */
    upsert<T extends BookConceptUpsertArgs>(args: SelectSubset<T, BookConceptUpsertArgs<ExtArgs>>): Prisma__BookConceptClient<$Result.GetResult<Prisma.$BookConceptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookConcepts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookConceptCountArgs} args - Arguments to filter BookConcepts to count.
     * @example
     * // Count the number of BookConcepts
     * const count = await prisma.bookConcept.count({
     *   where: {
     *     // ... the filter for the BookConcepts we want to count
     *   }
     * })
    **/
    count<T extends BookConceptCountArgs>(
      args?: Subset<T, BookConceptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookConceptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookConcept.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookConceptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookConceptAggregateArgs>(args: Subset<T, BookConceptAggregateArgs>): Prisma.PrismaPromise<GetBookConceptAggregateType<T>>

    /**
     * Group by BookConcept.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookConceptGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookConceptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookConceptGroupByArgs['orderBy'] }
        : { orderBy?: BookConceptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookConceptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookConceptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookConcept model
   */
  readonly fields: BookConceptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookConcept.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookConceptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookConcept model
   */
  interface BookConceptFieldRefs {
    readonly id: FieldRef<"BookConcept", 'String'>
    readonly bookId: FieldRef<"BookConcept", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BookConcept findUnique
   */
  export type BookConceptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookConcept
     */
    select?: BookConceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookConcept
     */
    omit?: BookConceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookConceptInclude<ExtArgs> | null
    /**
     * Filter, which BookConcept to fetch.
     */
    where: BookConceptWhereUniqueInput
  }

  /**
   * BookConcept findUniqueOrThrow
   */
  export type BookConceptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookConcept
     */
    select?: BookConceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookConcept
     */
    omit?: BookConceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookConceptInclude<ExtArgs> | null
    /**
     * Filter, which BookConcept to fetch.
     */
    where: BookConceptWhereUniqueInput
  }

  /**
   * BookConcept findFirst
   */
  export type BookConceptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookConcept
     */
    select?: BookConceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookConcept
     */
    omit?: BookConceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookConceptInclude<ExtArgs> | null
    /**
     * Filter, which BookConcept to fetch.
     */
    where?: BookConceptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookConcepts to fetch.
     */
    orderBy?: BookConceptOrderByWithRelationInput | BookConceptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookConcepts.
     */
    cursor?: BookConceptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookConcepts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookConcepts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookConcepts.
     */
    distinct?: BookConceptScalarFieldEnum | BookConceptScalarFieldEnum[]
  }

  /**
   * BookConcept findFirstOrThrow
   */
  export type BookConceptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookConcept
     */
    select?: BookConceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookConcept
     */
    omit?: BookConceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookConceptInclude<ExtArgs> | null
    /**
     * Filter, which BookConcept to fetch.
     */
    where?: BookConceptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookConcepts to fetch.
     */
    orderBy?: BookConceptOrderByWithRelationInput | BookConceptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookConcepts.
     */
    cursor?: BookConceptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookConcepts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookConcepts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookConcepts.
     */
    distinct?: BookConceptScalarFieldEnum | BookConceptScalarFieldEnum[]
  }

  /**
   * BookConcept findMany
   */
  export type BookConceptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookConcept
     */
    select?: BookConceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookConcept
     */
    omit?: BookConceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookConceptInclude<ExtArgs> | null
    /**
     * Filter, which BookConcepts to fetch.
     */
    where?: BookConceptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookConcepts to fetch.
     */
    orderBy?: BookConceptOrderByWithRelationInput | BookConceptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookConcepts.
     */
    cursor?: BookConceptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookConcepts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookConcepts.
     */
    skip?: number
    distinct?: BookConceptScalarFieldEnum | BookConceptScalarFieldEnum[]
  }

  /**
   * BookConcept create
   */
  export type BookConceptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookConcept
     */
    select?: BookConceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookConcept
     */
    omit?: BookConceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookConceptInclude<ExtArgs> | null
    /**
     * The data needed to create a BookConcept.
     */
    data: XOR<BookConceptCreateInput, BookConceptUncheckedCreateInput>
  }

  /**
   * BookConcept createMany
   */
  export type BookConceptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookConcepts.
     */
    data: BookConceptCreateManyInput | BookConceptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookConcept createManyAndReturn
   */
  export type BookConceptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookConcept
     */
    select?: BookConceptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookConcept
     */
    omit?: BookConceptOmit<ExtArgs> | null
    /**
     * The data used to create many BookConcepts.
     */
    data: BookConceptCreateManyInput | BookConceptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookConceptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookConcept update
   */
  export type BookConceptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookConcept
     */
    select?: BookConceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookConcept
     */
    omit?: BookConceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookConceptInclude<ExtArgs> | null
    /**
     * The data needed to update a BookConcept.
     */
    data: XOR<BookConceptUpdateInput, BookConceptUncheckedUpdateInput>
    /**
     * Choose, which BookConcept to update.
     */
    where: BookConceptWhereUniqueInput
  }

  /**
   * BookConcept updateMany
   */
  export type BookConceptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookConcepts.
     */
    data: XOR<BookConceptUpdateManyMutationInput, BookConceptUncheckedUpdateManyInput>
    /**
     * Filter which BookConcepts to update
     */
    where?: BookConceptWhereInput
    /**
     * Limit how many BookConcepts to update.
     */
    limit?: number
  }

  /**
   * BookConcept updateManyAndReturn
   */
  export type BookConceptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookConcept
     */
    select?: BookConceptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookConcept
     */
    omit?: BookConceptOmit<ExtArgs> | null
    /**
     * The data used to update BookConcepts.
     */
    data: XOR<BookConceptUpdateManyMutationInput, BookConceptUncheckedUpdateManyInput>
    /**
     * Filter which BookConcepts to update
     */
    where?: BookConceptWhereInput
    /**
     * Limit how many BookConcepts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookConceptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookConcept upsert
   */
  export type BookConceptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookConcept
     */
    select?: BookConceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookConcept
     */
    omit?: BookConceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookConceptInclude<ExtArgs> | null
    /**
     * The filter to search for the BookConcept to update in case it exists.
     */
    where: BookConceptWhereUniqueInput
    /**
     * In case the BookConcept found by the `where` argument doesn't exist, create a new BookConcept with this data.
     */
    create: XOR<BookConceptCreateInput, BookConceptUncheckedCreateInput>
    /**
     * In case the BookConcept was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookConceptUpdateInput, BookConceptUncheckedUpdateInput>
  }

  /**
   * BookConcept delete
   */
  export type BookConceptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookConcept
     */
    select?: BookConceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookConcept
     */
    omit?: BookConceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookConceptInclude<ExtArgs> | null
    /**
     * Filter which BookConcept to delete.
     */
    where: BookConceptWhereUniqueInput
  }

  /**
   * BookConcept deleteMany
   */
  export type BookConceptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookConcepts to delete
     */
    where?: BookConceptWhereInput
    /**
     * Limit how many BookConcepts to delete.
     */
    limit?: number
  }

  /**
   * BookConcept without action
   */
  export type BookConceptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookConcept
     */
    select?: BookConceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookConcept
     */
    omit?: BookConceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookConceptInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BookScalarFieldEnum: {
    id: 'id',
    title: 'title',
    author: 'author',
    description: 'description',
    coverUrl: 'coverUrl',
    fileUrl: 'fileUrl',
    fileType: 'fileType',
    totalPages: 'totalPages',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const ChapterScalarFieldEnum: {
    id: 'id',
    title: 'title',
    chapterNo: 'chapterNo',
    startPage: 'startPage',
    endPage: 'endPage',
    bookId: 'bookId'
  };

  export type ChapterScalarFieldEnum = (typeof ChapterScalarFieldEnum)[keyof typeof ChapterScalarFieldEnum]


  export const SectionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    sectionNo: 'sectionNo',
    content: 'content',
    chapterId: 'chapterId'
  };

  export type SectionScalarFieldEnum = (typeof SectionScalarFieldEnum)[keyof typeof SectionScalarFieldEnum]


  export const ContentChunkScalarFieldEnum: {
    id: 'id',
    content: 'content',
    chunkNo: 'chunkNo',
    pageStart: 'pageStart',
    pageEnd: 'pageEnd',
    bookId: 'bookId',
    sectionId: 'sectionId'
  };

  export type ContentChunkScalarFieldEnum = (typeof ContentChunkScalarFieldEnum)[keyof typeof ContentChunkScalarFieldEnum]


  export const ReadingProgressScalarFieldEnum: {
    id: 'id',
    currentPage: 'currentPage',
    currentChapter: 'currentChapter',
    progress: 'progress',
    lastReadAt: 'lastReadAt',
    userId: 'userId',
    bookId: 'bookId'
  };

  export type ReadingProgressScalarFieldEnum = (typeof ReadingProgressScalarFieldEnum)[keyof typeof ReadingProgressScalarFieldEnum]


  export const HighlightScalarFieldEnum: {
    id: 'id',
    text: 'text',
    color: 'color',
    page: 'page',
    position: 'position',
    createdAt: 'createdAt',
    userId: 'userId',
    bookId: 'bookId'
  };

  export type HighlightScalarFieldEnum = (typeof HighlightScalarFieldEnum)[keyof typeof HighlightScalarFieldEnum]


  export const NoteScalarFieldEnum: {
    id: 'id',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    bookId: 'bookId',
    highlightId: 'highlightId'
  };

  export type NoteScalarFieldEnum = (typeof NoteScalarFieldEnum)[keyof typeof NoteScalarFieldEnum]


  export const ConversationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bookId: 'bookId'
  };

  export type ConversationScalarFieldEnum = (typeof ConversationScalarFieldEnum)[keyof typeof ConversationScalarFieldEnum]


  export const UserConceptScalarFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type UserConceptScalarFieldEnum = (typeof UserConceptScalarFieldEnum)[keyof typeof UserConceptScalarFieldEnum]


  export const BookConceptScalarFieldEnum: {
    id: 'id',
    bookId: 'bookId'
  };

  export type BookConceptScalarFieldEnum = (typeof BookConceptScalarFieldEnum)[keyof typeof BookConceptScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BookFileType'
   */
  export type EnumBookFileTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookFileType'>
    


  /**
   * Reference to a field of type 'BookFileType[]'
   */
  export type ListEnumBookFileTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookFileType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    books?: BookListRelationFilter
    readingProgress?: ReadingProgressListRelationFilter
    highlights?: HighlightListRelationFilter
    notes?: NoteListRelationFilter
    conversations?: ConversationListRelationFilter
    userConcepts?: UserConceptListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    books?: BookOrderByRelationAggregateInput
    readingProgress?: ReadingProgressOrderByRelationAggregateInput
    highlights?: HighlightOrderByRelationAggregateInput
    notes?: NoteOrderByRelationAggregateInput
    conversations?: ConversationOrderByRelationAggregateInput
    userConcepts?: UserConceptOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    books?: BookListRelationFilter
    readingProgress?: ReadingProgressListRelationFilter
    highlights?: HighlightListRelationFilter
    notes?: NoteListRelationFilter
    conversations?: ConversationListRelationFilter
    userConcepts?: UserConceptListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BookWhereInput = {
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    id?: StringFilter<"Book"> | string
    title?: StringFilter<"Book"> | string
    author?: StringNullableFilter<"Book"> | string | null
    description?: StringNullableFilter<"Book"> | string | null
    coverUrl?: StringNullableFilter<"Book"> | string | null
    fileUrl?: StringNullableFilter<"Book"> | string | null
    fileType?: EnumBookFileTypeFilter<"Book"> | $Enums.BookFileType
    totalPages?: IntNullableFilter<"Book"> | number | null
    metadata?: JsonNullableFilter<"Book">
    createdAt?: DateTimeFilter<"Book"> | Date | string
    updatedAt?: DateTimeFilter<"Book"> | Date | string
    userId?: StringFilter<"Book"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chapters?: ChapterListRelationFilter
    readingProgress?: XOR<ReadingProgressNullableScalarRelationFilter, ReadingProgressWhereInput> | null
    highlights?: HighlightListRelationFilter
    notes?: NoteListRelationFilter
    chunks?: ContentChunkListRelationFilter
    bookConcepts?: BookConceptListRelationFilter
    conversations?: ConversationListRelationFilter
  }

  export type BookOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    coverUrl?: SortOrderInput | SortOrder
    fileUrl?: SortOrderInput | SortOrder
    fileType?: SortOrder
    totalPages?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    chapters?: ChapterOrderByRelationAggregateInput
    readingProgress?: ReadingProgressOrderByWithRelationInput
    highlights?: HighlightOrderByRelationAggregateInput
    notes?: NoteOrderByRelationAggregateInput
    chunks?: ContentChunkOrderByRelationAggregateInput
    bookConcepts?: BookConceptOrderByRelationAggregateInput
    conversations?: ConversationOrderByRelationAggregateInput
  }

  export type BookWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    title?: StringFilter<"Book"> | string
    author?: StringNullableFilter<"Book"> | string | null
    description?: StringNullableFilter<"Book"> | string | null
    coverUrl?: StringNullableFilter<"Book"> | string | null
    fileUrl?: StringNullableFilter<"Book"> | string | null
    fileType?: EnumBookFileTypeFilter<"Book"> | $Enums.BookFileType
    totalPages?: IntNullableFilter<"Book"> | number | null
    metadata?: JsonNullableFilter<"Book">
    createdAt?: DateTimeFilter<"Book"> | Date | string
    updatedAt?: DateTimeFilter<"Book"> | Date | string
    userId?: StringFilter<"Book"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chapters?: ChapterListRelationFilter
    readingProgress?: XOR<ReadingProgressNullableScalarRelationFilter, ReadingProgressWhereInput> | null
    highlights?: HighlightListRelationFilter
    notes?: NoteListRelationFilter
    chunks?: ContentChunkListRelationFilter
    bookConcepts?: BookConceptListRelationFilter
    conversations?: ConversationListRelationFilter
  }, "id">

  export type BookOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    coverUrl?: SortOrderInput | SortOrder
    fileUrl?: SortOrderInput | SortOrder
    fileType?: SortOrder
    totalPages?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: BookCountOrderByAggregateInput
    _avg?: BookAvgOrderByAggregateInput
    _max?: BookMaxOrderByAggregateInput
    _min?: BookMinOrderByAggregateInput
    _sum?: BookSumOrderByAggregateInput
  }

  export type BookScalarWhereWithAggregatesInput = {
    AND?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    OR?: BookScalarWhereWithAggregatesInput[]
    NOT?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Book"> | string
    title?: StringWithAggregatesFilter<"Book"> | string
    author?: StringNullableWithAggregatesFilter<"Book"> | string | null
    description?: StringNullableWithAggregatesFilter<"Book"> | string | null
    coverUrl?: StringNullableWithAggregatesFilter<"Book"> | string | null
    fileUrl?: StringNullableWithAggregatesFilter<"Book"> | string | null
    fileType?: EnumBookFileTypeWithAggregatesFilter<"Book"> | $Enums.BookFileType
    totalPages?: IntNullableWithAggregatesFilter<"Book"> | number | null
    metadata?: JsonNullableWithAggregatesFilter<"Book">
    createdAt?: DateTimeWithAggregatesFilter<"Book"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Book"> | Date | string
    userId?: StringWithAggregatesFilter<"Book"> | string
  }

  export type ChapterWhereInput = {
    AND?: ChapterWhereInput | ChapterWhereInput[]
    OR?: ChapterWhereInput[]
    NOT?: ChapterWhereInput | ChapterWhereInput[]
    id?: StringFilter<"Chapter"> | string
    title?: StringFilter<"Chapter"> | string
    chapterNo?: IntFilter<"Chapter"> | number
    startPage?: IntNullableFilter<"Chapter"> | number | null
    endPage?: IntNullableFilter<"Chapter"> | number | null
    bookId?: StringFilter<"Chapter"> | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    sections?: SectionListRelationFilter
  }

  export type ChapterOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    chapterNo?: SortOrder
    startPage?: SortOrderInput | SortOrder
    endPage?: SortOrderInput | SortOrder
    bookId?: SortOrder
    book?: BookOrderByWithRelationInput
    sections?: SectionOrderByRelationAggregateInput
  }

  export type ChapterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bookId_chapterNo?: ChapterBookIdChapterNoCompoundUniqueInput
    AND?: ChapterWhereInput | ChapterWhereInput[]
    OR?: ChapterWhereInput[]
    NOT?: ChapterWhereInput | ChapterWhereInput[]
    title?: StringFilter<"Chapter"> | string
    chapterNo?: IntFilter<"Chapter"> | number
    startPage?: IntNullableFilter<"Chapter"> | number | null
    endPage?: IntNullableFilter<"Chapter"> | number | null
    bookId?: StringFilter<"Chapter"> | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    sections?: SectionListRelationFilter
  }, "id" | "bookId_chapterNo">

  export type ChapterOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    chapterNo?: SortOrder
    startPage?: SortOrderInput | SortOrder
    endPage?: SortOrderInput | SortOrder
    bookId?: SortOrder
    _count?: ChapterCountOrderByAggregateInput
    _avg?: ChapterAvgOrderByAggregateInput
    _max?: ChapterMaxOrderByAggregateInput
    _min?: ChapterMinOrderByAggregateInput
    _sum?: ChapterSumOrderByAggregateInput
  }

  export type ChapterScalarWhereWithAggregatesInput = {
    AND?: ChapterScalarWhereWithAggregatesInput | ChapterScalarWhereWithAggregatesInput[]
    OR?: ChapterScalarWhereWithAggregatesInput[]
    NOT?: ChapterScalarWhereWithAggregatesInput | ChapterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chapter"> | string
    title?: StringWithAggregatesFilter<"Chapter"> | string
    chapterNo?: IntWithAggregatesFilter<"Chapter"> | number
    startPage?: IntNullableWithAggregatesFilter<"Chapter"> | number | null
    endPage?: IntNullableWithAggregatesFilter<"Chapter"> | number | null
    bookId?: StringWithAggregatesFilter<"Chapter"> | string
  }

  export type SectionWhereInput = {
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    id?: StringFilter<"Section"> | string
    title?: StringNullableFilter<"Section"> | string | null
    sectionNo?: IntFilter<"Section"> | number
    content?: StringNullableFilter<"Section"> | string | null
    chapterId?: StringFilter<"Section"> | string
    chapter?: XOR<ChapterScalarRelationFilter, ChapterWhereInput>
    chunks?: ContentChunkListRelationFilter
  }

  export type SectionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    sectionNo?: SortOrder
    content?: SortOrderInput | SortOrder
    chapterId?: SortOrder
    chapter?: ChapterOrderByWithRelationInput
    chunks?: ContentChunkOrderByRelationAggregateInput
  }

  export type SectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    chapterId_sectionNo?: SectionChapterIdSectionNoCompoundUniqueInput
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    title?: StringNullableFilter<"Section"> | string | null
    sectionNo?: IntFilter<"Section"> | number
    content?: StringNullableFilter<"Section"> | string | null
    chapterId?: StringFilter<"Section"> | string
    chapter?: XOR<ChapterScalarRelationFilter, ChapterWhereInput>
    chunks?: ContentChunkListRelationFilter
  }, "id" | "chapterId_sectionNo">

  export type SectionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    sectionNo?: SortOrder
    content?: SortOrderInput | SortOrder
    chapterId?: SortOrder
    _count?: SectionCountOrderByAggregateInput
    _avg?: SectionAvgOrderByAggregateInput
    _max?: SectionMaxOrderByAggregateInput
    _min?: SectionMinOrderByAggregateInput
    _sum?: SectionSumOrderByAggregateInput
  }

  export type SectionScalarWhereWithAggregatesInput = {
    AND?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    OR?: SectionScalarWhereWithAggregatesInput[]
    NOT?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Section"> | string
    title?: StringNullableWithAggregatesFilter<"Section"> | string | null
    sectionNo?: IntWithAggregatesFilter<"Section"> | number
    content?: StringNullableWithAggregatesFilter<"Section"> | string | null
    chapterId?: StringWithAggregatesFilter<"Section"> | string
  }

  export type ContentChunkWhereInput = {
    AND?: ContentChunkWhereInput | ContentChunkWhereInput[]
    OR?: ContentChunkWhereInput[]
    NOT?: ContentChunkWhereInput | ContentChunkWhereInput[]
    id?: StringFilter<"ContentChunk"> | string
    content?: StringFilter<"ContentChunk"> | string
    chunkNo?: IntFilter<"ContentChunk"> | number
    pageStart?: IntNullableFilter<"ContentChunk"> | number | null
    pageEnd?: IntNullableFilter<"ContentChunk"> | number | null
    bookId?: StringFilter<"ContentChunk"> | string
    sectionId?: StringNullableFilter<"ContentChunk"> | string | null
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    section?: XOR<SectionNullableScalarRelationFilter, SectionWhereInput> | null
  }

  export type ContentChunkOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    chunkNo?: SortOrder
    pageStart?: SortOrderInput | SortOrder
    pageEnd?: SortOrderInput | SortOrder
    bookId?: SortOrder
    sectionId?: SortOrderInput | SortOrder
    book?: BookOrderByWithRelationInput
    section?: SectionOrderByWithRelationInput
  }

  export type ContentChunkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContentChunkWhereInput | ContentChunkWhereInput[]
    OR?: ContentChunkWhereInput[]
    NOT?: ContentChunkWhereInput | ContentChunkWhereInput[]
    content?: StringFilter<"ContentChunk"> | string
    chunkNo?: IntFilter<"ContentChunk"> | number
    pageStart?: IntNullableFilter<"ContentChunk"> | number | null
    pageEnd?: IntNullableFilter<"ContentChunk"> | number | null
    bookId?: StringFilter<"ContentChunk"> | string
    sectionId?: StringNullableFilter<"ContentChunk"> | string | null
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    section?: XOR<SectionNullableScalarRelationFilter, SectionWhereInput> | null
  }, "id">

  export type ContentChunkOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    chunkNo?: SortOrder
    pageStart?: SortOrderInput | SortOrder
    pageEnd?: SortOrderInput | SortOrder
    bookId?: SortOrder
    sectionId?: SortOrderInput | SortOrder
    _count?: ContentChunkCountOrderByAggregateInput
    _avg?: ContentChunkAvgOrderByAggregateInput
    _max?: ContentChunkMaxOrderByAggregateInput
    _min?: ContentChunkMinOrderByAggregateInput
    _sum?: ContentChunkSumOrderByAggregateInput
  }

  export type ContentChunkScalarWhereWithAggregatesInput = {
    AND?: ContentChunkScalarWhereWithAggregatesInput | ContentChunkScalarWhereWithAggregatesInput[]
    OR?: ContentChunkScalarWhereWithAggregatesInput[]
    NOT?: ContentChunkScalarWhereWithAggregatesInput | ContentChunkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContentChunk"> | string
    content?: StringWithAggregatesFilter<"ContentChunk"> | string
    chunkNo?: IntWithAggregatesFilter<"ContentChunk"> | number
    pageStart?: IntNullableWithAggregatesFilter<"ContentChunk"> | number | null
    pageEnd?: IntNullableWithAggregatesFilter<"ContentChunk"> | number | null
    bookId?: StringWithAggregatesFilter<"ContentChunk"> | string
    sectionId?: StringNullableWithAggregatesFilter<"ContentChunk"> | string | null
  }

  export type ReadingProgressWhereInput = {
    AND?: ReadingProgressWhereInput | ReadingProgressWhereInput[]
    OR?: ReadingProgressWhereInput[]
    NOT?: ReadingProgressWhereInput | ReadingProgressWhereInput[]
    id?: StringFilter<"ReadingProgress"> | string
    currentPage?: IntNullableFilter<"ReadingProgress"> | number | null
    currentChapter?: IntNullableFilter<"ReadingProgress"> | number | null
    progress?: FloatFilter<"ReadingProgress"> | number
    lastReadAt?: DateTimeFilter<"ReadingProgress"> | Date | string
    userId?: StringFilter<"ReadingProgress"> | string
    bookId?: StringFilter<"ReadingProgress"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }

  export type ReadingProgressOrderByWithRelationInput = {
    id?: SortOrder
    currentPage?: SortOrderInput | SortOrder
    currentChapter?: SortOrderInput | SortOrder
    progress?: SortOrder
    lastReadAt?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    user?: UserOrderByWithRelationInput
    book?: BookOrderByWithRelationInput
  }

  export type ReadingProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bookId?: string
    userId_bookId?: ReadingProgressUserIdBookIdCompoundUniqueInput
    AND?: ReadingProgressWhereInput | ReadingProgressWhereInput[]
    OR?: ReadingProgressWhereInput[]
    NOT?: ReadingProgressWhereInput | ReadingProgressWhereInput[]
    currentPage?: IntNullableFilter<"ReadingProgress"> | number | null
    currentChapter?: IntNullableFilter<"ReadingProgress"> | number | null
    progress?: FloatFilter<"ReadingProgress"> | number
    lastReadAt?: DateTimeFilter<"ReadingProgress"> | Date | string
    userId?: StringFilter<"ReadingProgress"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }, "id" | "bookId" | "userId_bookId">

  export type ReadingProgressOrderByWithAggregationInput = {
    id?: SortOrder
    currentPage?: SortOrderInput | SortOrder
    currentChapter?: SortOrderInput | SortOrder
    progress?: SortOrder
    lastReadAt?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    _count?: ReadingProgressCountOrderByAggregateInput
    _avg?: ReadingProgressAvgOrderByAggregateInput
    _max?: ReadingProgressMaxOrderByAggregateInput
    _min?: ReadingProgressMinOrderByAggregateInput
    _sum?: ReadingProgressSumOrderByAggregateInput
  }

  export type ReadingProgressScalarWhereWithAggregatesInput = {
    AND?: ReadingProgressScalarWhereWithAggregatesInput | ReadingProgressScalarWhereWithAggregatesInput[]
    OR?: ReadingProgressScalarWhereWithAggregatesInput[]
    NOT?: ReadingProgressScalarWhereWithAggregatesInput | ReadingProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReadingProgress"> | string
    currentPage?: IntNullableWithAggregatesFilter<"ReadingProgress"> | number | null
    currentChapter?: IntNullableWithAggregatesFilter<"ReadingProgress"> | number | null
    progress?: FloatWithAggregatesFilter<"ReadingProgress"> | number
    lastReadAt?: DateTimeWithAggregatesFilter<"ReadingProgress"> | Date | string
    userId?: StringWithAggregatesFilter<"ReadingProgress"> | string
    bookId?: StringWithAggregatesFilter<"ReadingProgress"> | string
  }

  export type HighlightWhereInput = {
    AND?: HighlightWhereInput | HighlightWhereInput[]
    OR?: HighlightWhereInput[]
    NOT?: HighlightWhereInput | HighlightWhereInput[]
    id?: StringFilter<"Highlight"> | string
    text?: StringFilter<"Highlight"> | string
    color?: StringNullableFilter<"Highlight"> | string | null
    page?: IntNullableFilter<"Highlight"> | number | null
    position?: JsonNullableFilter<"Highlight">
    createdAt?: DateTimeFilter<"Highlight"> | Date | string
    userId?: StringFilter<"Highlight"> | string
    bookId?: StringFilter<"Highlight"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    note?: XOR<NoteNullableScalarRelationFilter, NoteWhereInput> | null
  }

  export type HighlightOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    color?: SortOrderInput | SortOrder
    page?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    user?: UserOrderByWithRelationInput
    book?: BookOrderByWithRelationInput
    note?: NoteOrderByWithRelationInput
  }

  export type HighlightWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HighlightWhereInput | HighlightWhereInput[]
    OR?: HighlightWhereInput[]
    NOT?: HighlightWhereInput | HighlightWhereInput[]
    text?: StringFilter<"Highlight"> | string
    color?: StringNullableFilter<"Highlight"> | string | null
    page?: IntNullableFilter<"Highlight"> | number | null
    position?: JsonNullableFilter<"Highlight">
    createdAt?: DateTimeFilter<"Highlight"> | Date | string
    userId?: StringFilter<"Highlight"> | string
    bookId?: StringFilter<"Highlight"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    note?: XOR<NoteNullableScalarRelationFilter, NoteWhereInput> | null
  }, "id">

  export type HighlightOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    color?: SortOrderInput | SortOrder
    page?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    _count?: HighlightCountOrderByAggregateInput
    _avg?: HighlightAvgOrderByAggregateInput
    _max?: HighlightMaxOrderByAggregateInput
    _min?: HighlightMinOrderByAggregateInput
    _sum?: HighlightSumOrderByAggregateInput
  }

  export type HighlightScalarWhereWithAggregatesInput = {
    AND?: HighlightScalarWhereWithAggregatesInput | HighlightScalarWhereWithAggregatesInput[]
    OR?: HighlightScalarWhereWithAggregatesInput[]
    NOT?: HighlightScalarWhereWithAggregatesInput | HighlightScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Highlight"> | string
    text?: StringWithAggregatesFilter<"Highlight"> | string
    color?: StringNullableWithAggregatesFilter<"Highlight"> | string | null
    page?: IntNullableWithAggregatesFilter<"Highlight"> | number | null
    position?: JsonNullableWithAggregatesFilter<"Highlight">
    createdAt?: DateTimeWithAggregatesFilter<"Highlight"> | Date | string
    userId?: StringWithAggregatesFilter<"Highlight"> | string
    bookId?: StringWithAggregatesFilter<"Highlight"> | string
  }

  export type NoteWhereInput = {
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    id?: StringFilter<"Note"> | string
    content?: StringFilter<"Note"> | string
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
    userId?: StringFilter<"Note"> | string
    bookId?: StringFilter<"Note"> | string
    highlightId?: StringNullableFilter<"Note"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    highlight?: XOR<HighlightNullableScalarRelationFilter, HighlightWhereInput> | null
  }

  export type NoteOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    highlightId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    book?: BookOrderByWithRelationInput
    highlight?: HighlightOrderByWithRelationInput
  }

  export type NoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    highlightId?: string
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    content?: StringFilter<"Note"> | string
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
    userId?: StringFilter<"Note"> | string
    bookId?: StringFilter<"Note"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    highlight?: XOR<HighlightNullableScalarRelationFilter, HighlightWhereInput> | null
  }, "id" | "highlightId">

  export type NoteOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    highlightId?: SortOrderInput | SortOrder
    _count?: NoteCountOrderByAggregateInput
    _max?: NoteMaxOrderByAggregateInput
    _min?: NoteMinOrderByAggregateInput
  }

  export type NoteScalarWhereWithAggregatesInput = {
    AND?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    OR?: NoteScalarWhereWithAggregatesInput[]
    NOT?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Note"> | string
    content?: StringWithAggregatesFilter<"Note"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string
    userId?: StringWithAggregatesFilter<"Note"> | string
    bookId?: StringWithAggregatesFilter<"Note"> | string
    highlightId?: StringNullableWithAggregatesFilter<"Note"> | string | null
  }

  export type ConversationWhereInput = {
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    id?: StringFilter<"Conversation"> | string
    userId?: StringFilter<"Conversation"> | string
    bookId?: StringFilter<"Conversation"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }

  export type ConversationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    user?: UserOrderByWithRelationInput
    book?: BookOrderByWithRelationInput
  }

  export type ConversationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    userId?: StringFilter<"Conversation"> | string
    bookId?: StringFilter<"Conversation"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }, "id">

  export type ConversationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    _count?: ConversationCountOrderByAggregateInput
    _max?: ConversationMaxOrderByAggregateInput
    _min?: ConversationMinOrderByAggregateInput
  }

  export type ConversationScalarWhereWithAggregatesInput = {
    AND?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    OR?: ConversationScalarWhereWithAggregatesInput[]
    NOT?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Conversation"> | string
    userId?: StringWithAggregatesFilter<"Conversation"> | string
    bookId?: StringWithAggregatesFilter<"Conversation"> | string
  }

  export type UserConceptWhereInput = {
    AND?: UserConceptWhereInput | UserConceptWhereInput[]
    OR?: UserConceptWhereInput[]
    NOT?: UserConceptWhereInput | UserConceptWhereInput[]
    id?: StringFilter<"UserConcept"> | string
    userId?: StringFilter<"UserConcept"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserConceptOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserConceptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserConceptWhereInput | UserConceptWhereInput[]
    OR?: UserConceptWhereInput[]
    NOT?: UserConceptWhereInput | UserConceptWhereInput[]
    userId?: StringFilter<"UserConcept"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserConceptOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    _count?: UserConceptCountOrderByAggregateInput
    _max?: UserConceptMaxOrderByAggregateInput
    _min?: UserConceptMinOrderByAggregateInput
  }

  export type UserConceptScalarWhereWithAggregatesInput = {
    AND?: UserConceptScalarWhereWithAggregatesInput | UserConceptScalarWhereWithAggregatesInput[]
    OR?: UserConceptScalarWhereWithAggregatesInput[]
    NOT?: UserConceptScalarWhereWithAggregatesInput | UserConceptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserConcept"> | string
    userId?: StringWithAggregatesFilter<"UserConcept"> | string
  }

  export type BookConceptWhereInput = {
    AND?: BookConceptWhereInput | BookConceptWhereInput[]
    OR?: BookConceptWhereInput[]
    NOT?: BookConceptWhereInput | BookConceptWhereInput[]
    id?: StringFilter<"BookConcept"> | string
    bookId?: StringFilter<"BookConcept"> | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }

  export type BookConceptOrderByWithRelationInput = {
    id?: SortOrder
    bookId?: SortOrder
    book?: BookOrderByWithRelationInput
  }

  export type BookConceptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookConceptWhereInput | BookConceptWhereInput[]
    OR?: BookConceptWhereInput[]
    NOT?: BookConceptWhereInput | BookConceptWhereInput[]
    bookId?: StringFilter<"BookConcept"> | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }, "id">

  export type BookConceptOrderByWithAggregationInput = {
    id?: SortOrder
    bookId?: SortOrder
    _count?: BookConceptCountOrderByAggregateInput
    _max?: BookConceptMaxOrderByAggregateInput
    _min?: BookConceptMinOrderByAggregateInput
  }

  export type BookConceptScalarWhereWithAggregatesInput = {
    AND?: BookConceptScalarWhereWithAggregatesInput | BookConceptScalarWhereWithAggregatesInput[]
    OR?: BookConceptScalarWhereWithAggregatesInput[]
    NOT?: BookConceptScalarWhereWithAggregatesInput | BookConceptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BookConcept"> | string
    bookId?: StringWithAggregatesFilter<"BookConcept"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookCreateNestedManyWithoutUserInput
    readingProgress?: ReadingProgressCreateNestedManyWithoutUserInput
    highlights?: HighlightCreateNestedManyWithoutUserInput
    notes?: NoteCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUserInput
    userConcepts?: UserConceptCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookUncheckedCreateNestedManyWithoutUserInput
    readingProgress?: ReadingProgressUncheckedCreateNestedManyWithoutUserInput
    highlights?: HighlightUncheckedCreateNestedManyWithoutUserInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUserInput
    userConcepts?: UserConceptUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUpdateManyWithoutUserNestedInput
    readingProgress?: ReadingProgressUpdateManyWithoutUserNestedInput
    highlights?: HighlightUpdateManyWithoutUserNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUserNestedInput
    userConcepts?: UserConceptUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUncheckedUpdateManyWithoutUserNestedInput
    readingProgress?: ReadingProgressUncheckedUpdateManyWithoutUserNestedInput
    highlights?: HighlightUncheckedUpdateManyWithoutUserNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUserNestedInput
    userConcepts?: UserConceptUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookCreateInput = {
    id?: string
    title: string
    author?: string | null
    description?: string | null
    coverUrl?: string | null
    fileUrl?: string | null
    fileType: $Enums.BookFileType
    totalPages?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBooksInput
    chapters?: ChapterCreateNestedManyWithoutBookInput
    readingProgress?: ReadingProgressCreateNestedOneWithoutBookInput
    highlights?: HighlightCreateNestedManyWithoutBookInput
    notes?: NoteCreateNestedManyWithoutBookInput
    chunks?: ContentChunkCreateNestedManyWithoutBookInput
    bookConcepts?: BookConceptCreateNestedManyWithoutBookInput
    conversations?: ConversationCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateInput = {
    id?: string
    title: string
    author?: string | null
    description?: string | null
    coverUrl?: string | null
    fileUrl?: string | null
    fileType: $Enums.BookFileType
    totalPages?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    chapters?: ChapterUncheckedCreateNestedManyWithoutBookInput
    readingProgress?: ReadingProgressUncheckedCreateNestedOneWithoutBookInput
    highlights?: HighlightUncheckedCreateNestedManyWithoutBookInput
    notes?: NoteUncheckedCreateNestedManyWithoutBookInput
    chunks?: ContentChunkUncheckedCreateNestedManyWithoutBookInput
    bookConcepts?: BookConceptUncheckedCreateNestedManyWithoutBookInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: EnumBookFileTypeFieldUpdateOperationsInput | $Enums.BookFileType
    totalPages?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBooksNestedInput
    chapters?: ChapterUpdateManyWithoutBookNestedInput
    readingProgress?: ReadingProgressUpdateOneWithoutBookNestedInput
    highlights?: HighlightUpdateManyWithoutBookNestedInput
    notes?: NoteUpdateManyWithoutBookNestedInput
    chunks?: ContentChunkUpdateManyWithoutBookNestedInput
    bookConcepts?: BookConceptUpdateManyWithoutBookNestedInput
    conversations?: ConversationUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: EnumBookFileTypeFieldUpdateOperationsInput | $Enums.BookFileType
    totalPages?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    chapters?: ChapterUncheckedUpdateManyWithoutBookNestedInput
    readingProgress?: ReadingProgressUncheckedUpdateOneWithoutBookNestedInput
    highlights?: HighlightUncheckedUpdateManyWithoutBookNestedInput
    notes?: NoteUncheckedUpdateManyWithoutBookNestedInput
    chunks?: ContentChunkUncheckedUpdateManyWithoutBookNestedInput
    bookConcepts?: BookConceptUncheckedUpdateManyWithoutBookNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateManyInput = {
    id?: string
    title: string
    author?: string | null
    description?: string | null
    coverUrl?: string | null
    fileUrl?: string | null
    fileType: $Enums.BookFileType
    totalPages?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type BookUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: EnumBookFileTypeFieldUpdateOperationsInput | $Enums.BookFileType
    totalPages?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: EnumBookFileTypeFieldUpdateOperationsInput | $Enums.BookFileType
    totalPages?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ChapterCreateInput = {
    id?: string
    title: string
    chapterNo: number
    startPage?: number | null
    endPage?: number | null
    book: BookCreateNestedOneWithoutChaptersInput
    sections?: SectionCreateNestedManyWithoutChapterInput
  }

  export type ChapterUncheckedCreateInput = {
    id?: string
    title: string
    chapterNo: number
    startPage?: number | null
    endPage?: number | null
    bookId: string
    sections?: SectionUncheckedCreateNestedManyWithoutChapterInput
  }

  export type ChapterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    chapterNo?: IntFieldUpdateOperationsInput | number
    startPage?: NullableIntFieldUpdateOperationsInput | number | null
    endPage?: NullableIntFieldUpdateOperationsInput | number | null
    book?: BookUpdateOneRequiredWithoutChaptersNestedInput
    sections?: SectionUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    chapterNo?: IntFieldUpdateOperationsInput | number
    startPage?: NullableIntFieldUpdateOperationsInput | number | null
    endPage?: NullableIntFieldUpdateOperationsInput | number | null
    bookId?: StringFieldUpdateOperationsInput | string
    sections?: SectionUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type ChapterCreateManyInput = {
    id?: string
    title: string
    chapterNo: number
    startPage?: number | null
    endPage?: number | null
    bookId: string
  }

  export type ChapterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    chapterNo?: IntFieldUpdateOperationsInput | number
    startPage?: NullableIntFieldUpdateOperationsInput | number | null
    endPage?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ChapterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    chapterNo?: IntFieldUpdateOperationsInput | number
    startPage?: NullableIntFieldUpdateOperationsInput | number | null
    endPage?: NullableIntFieldUpdateOperationsInput | number | null
    bookId?: StringFieldUpdateOperationsInput | string
  }

  export type SectionCreateInput = {
    id?: string
    title?: string | null
    sectionNo: number
    content?: string | null
    chapter: ChapterCreateNestedOneWithoutSectionsInput
    chunks?: ContentChunkCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateInput = {
    id?: string
    title?: string | null
    sectionNo: number
    content?: string | null
    chapterId: string
    chunks?: ContentChunkUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    sectionNo?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    chapter?: ChapterUpdateOneRequiredWithoutSectionsNestedInput
    chunks?: ContentChunkUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    sectionNo?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    chapterId?: StringFieldUpdateOperationsInput | string
    chunks?: ContentChunkUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionCreateManyInput = {
    id?: string
    title?: string | null
    sectionNo: number
    content?: string | null
    chapterId: string
  }

  export type SectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    sectionNo?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    sectionNo?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    chapterId?: StringFieldUpdateOperationsInput | string
  }

  export type ContentChunkCreateInput = {
    id?: string
    content: string
    chunkNo: number
    pageStart?: number | null
    pageEnd?: number | null
    book: BookCreateNestedOneWithoutChunksInput
    section?: SectionCreateNestedOneWithoutChunksInput
  }

  export type ContentChunkUncheckedCreateInput = {
    id?: string
    content: string
    chunkNo: number
    pageStart?: number | null
    pageEnd?: number | null
    bookId: string
    sectionId?: string | null
  }

  export type ContentChunkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    chunkNo?: IntFieldUpdateOperationsInput | number
    pageStart?: NullableIntFieldUpdateOperationsInput | number | null
    pageEnd?: NullableIntFieldUpdateOperationsInput | number | null
    book?: BookUpdateOneRequiredWithoutChunksNestedInput
    section?: SectionUpdateOneWithoutChunksNestedInput
  }

  export type ContentChunkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    chunkNo?: IntFieldUpdateOperationsInput | number
    pageStart?: NullableIntFieldUpdateOperationsInput | number | null
    pageEnd?: NullableIntFieldUpdateOperationsInput | number | null
    bookId?: StringFieldUpdateOperationsInput | string
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContentChunkCreateManyInput = {
    id?: string
    content: string
    chunkNo: number
    pageStart?: number | null
    pageEnd?: number | null
    bookId: string
    sectionId?: string | null
  }

  export type ContentChunkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    chunkNo?: IntFieldUpdateOperationsInput | number
    pageStart?: NullableIntFieldUpdateOperationsInput | number | null
    pageEnd?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ContentChunkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    chunkNo?: IntFieldUpdateOperationsInput | number
    pageStart?: NullableIntFieldUpdateOperationsInput | number | null
    pageEnd?: NullableIntFieldUpdateOperationsInput | number | null
    bookId?: StringFieldUpdateOperationsInput | string
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReadingProgressCreateInput = {
    id?: string
    currentPage?: number | null
    currentChapter?: number | null
    progress?: number
    lastReadAt?: Date | string
    user: UserCreateNestedOneWithoutReadingProgressInput
    book: BookCreateNestedOneWithoutReadingProgressInput
  }

  export type ReadingProgressUncheckedCreateInput = {
    id?: string
    currentPage?: number | null
    currentChapter?: number | null
    progress?: number
    lastReadAt?: Date | string
    userId: string
    bookId: string
  }

  export type ReadingProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentPage?: NullableIntFieldUpdateOperationsInput | number | null
    currentChapter?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: FloatFieldUpdateOperationsInput | number
    lastReadAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReadingProgressNestedInput
    book?: BookUpdateOneRequiredWithoutReadingProgressNestedInput
  }

  export type ReadingProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentPage?: NullableIntFieldUpdateOperationsInput | number | null
    currentChapter?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: FloatFieldUpdateOperationsInput | number
    lastReadAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
  }

  export type ReadingProgressCreateManyInput = {
    id?: string
    currentPage?: number | null
    currentChapter?: number | null
    progress?: number
    lastReadAt?: Date | string
    userId: string
    bookId: string
  }

  export type ReadingProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentPage?: NullableIntFieldUpdateOperationsInput | number | null
    currentChapter?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: FloatFieldUpdateOperationsInput | number
    lastReadAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReadingProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentPage?: NullableIntFieldUpdateOperationsInput | number | null
    currentChapter?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: FloatFieldUpdateOperationsInput | number
    lastReadAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
  }

  export type HighlightCreateInput = {
    id?: string
    text: string
    color?: string | null
    page?: number | null
    position?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutHighlightsInput
    book: BookCreateNestedOneWithoutHighlightsInput
    note?: NoteCreateNestedOneWithoutHighlightInput
  }

  export type HighlightUncheckedCreateInput = {
    id?: string
    text: string
    color?: string | null
    page?: number | null
    position?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    userId: string
    bookId: string
    note?: NoteUncheckedCreateNestedOneWithoutHighlightInput
  }

  export type HighlightUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    page?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHighlightsNestedInput
    book?: BookUpdateOneRequiredWithoutHighlightsNestedInput
    note?: NoteUpdateOneWithoutHighlightNestedInput
  }

  export type HighlightUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    page?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    note?: NoteUncheckedUpdateOneWithoutHighlightNestedInput
  }

  export type HighlightCreateManyInput = {
    id?: string
    text: string
    color?: string | null
    page?: number | null
    position?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    userId: string
    bookId: string
  }

  export type HighlightUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    page?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HighlightUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    page?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
  }

  export type NoteCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutNotesInput
    book: BookCreateNestedOneWithoutNotesInput
    highlight?: HighlightCreateNestedOneWithoutNoteInput
  }

  export type NoteUncheckedCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    bookId: string
    highlightId?: string | null
  }

  export type NoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotesNestedInput
    book?: BookUpdateOneRequiredWithoutNotesNestedInput
    highlight?: HighlightUpdateOneWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    highlightId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NoteCreateManyInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    bookId: string
    highlightId?: string | null
  }

  export type NoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    highlightId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConversationCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutConversationsInput
    book: BookCreateNestedOneWithoutConversationsInput
  }

  export type ConversationUncheckedCreateInput = {
    id?: string
    userId: string
    bookId: string
  }

  export type ConversationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutConversationsNestedInput
    book?: BookUpdateOneRequiredWithoutConversationsNestedInput
  }

  export type ConversationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
  }

  export type ConversationCreateManyInput = {
    id?: string
    userId: string
    bookId: string
  }

  export type ConversationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ConversationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
  }

  export type UserConceptCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutUserConceptsInput
  }

  export type UserConceptUncheckedCreateInput = {
    id?: string
    userId: string
  }

  export type UserConceptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutUserConceptsNestedInput
  }

  export type UserConceptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserConceptCreateManyInput = {
    id?: string
    userId: string
  }

  export type UserConceptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type UserConceptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type BookConceptCreateInput = {
    id?: string
    book: BookCreateNestedOneWithoutBookConceptsInput
  }

  export type BookConceptUncheckedCreateInput = {
    id?: string
    bookId: string
  }

  export type BookConceptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    book?: BookUpdateOneRequiredWithoutBookConceptsNestedInput
  }

  export type BookConceptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
  }

  export type BookConceptCreateManyInput = {
    id?: string
    bookId: string
  }

  export type BookConceptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type BookConceptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BookListRelationFilter = {
    every?: BookWhereInput
    some?: BookWhereInput
    none?: BookWhereInput
  }

  export type ReadingProgressListRelationFilter = {
    every?: ReadingProgressWhereInput
    some?: ReadingProgressWhereInput
    none?: ReadingProgressWhereInput
  }

  export type HighlightListRelationFilter = {
    every?: HighlightWhereInput
    some?: HighlightWhereInput
    none?: HighlightWhereInput
  }

  export type NoteListRelationFilter = {
    every?: NoteWhereInput
    some?: NoteWhereInput
    none?: NoteWhereInput
  }

  export type ConversationListRelationFilter = {
    every?: ConversationWhereInput
    some?: ConversationWhereInput
    none?: ConversationWhereInput
  }

  export type UserConceptListRelationFilter = {
    every?: UserConceptWhereInput
    some?: UserConceptWhereInput
    none?: UserConceptWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReadingProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HighlightOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserConceptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumBookFileTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BookFileType | EnumBookFileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BookFileType[] | ListEnumBookFileTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookFileType[] | ListEnumBookFileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBookFileTypeFilter<$PrismaModel> | $Enums.BookFileType
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ChapterListRelationFilter = {
    every?: ChapterWhereInput
    some?: ChapterWhereInput
    none?: ChapterWhereInput
  }

  export type ReadingProgressNullableScalarRelationFilter = {
    is?: ReadingProgressWhereInput | null
    isNot?: ReadingProgressWhereInput | null
  }

  export type ContentChunkListRelationFilter = {
    every?: ContentChunkWhereInput
    some?: ContentChunkWhereInput
    none?: ContentChunkWhereInput
  }

  export type BookConceptListRelationFilter = {
    every?: BookConceptWhereInput
    some?: BookConceptWhereInput
    none?: BookConceptWhereInput
  }

  export type ChapterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContentChunkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookConceptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    description?: SortOrder
    coverUrl?: SortOrder
    fileUrl?: SortOrder
    fileType?: SortOrder
    totalPages?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type BookAvgOrderByAggregateInput = {
    totalPages?: SortOrder
  }

  export type BookMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    description?: SortOrder
    coverUrl?: SortOrder
    fileUrl?: SortOrder
    fileType?: SortOrder
    totalPages?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type BookMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    description?: SortOrder
    coverUrl?: SortOrder
    fileUrl?: SortOrder
    fileType?: SortOrder
    totalPages?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type BookSumOrderByAggregateInput = {
    totalPages?: SortOrder
  }

  export type EnumBookFileTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookFileType | EnumBookFileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BookFileType[] | ListEnumBookFileTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookFileType[] | ListEnumBookFileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBookFileTypeWithAggregatesFilter<$PrismaModel> | $Enums.BookFileType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookFileTypeFilter<$PrismaModel>
    _max?: NestedEnumBookFileTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BookScalarRelationFilter = {
    is?: BookWhereInput
    isNot?: BookWhereInput
  }

  export type SectionListRelationFilter = {
    every?: SectionWhereInput
    some?: SectionWhereInput
    none?: SectionWhereInput
  }

  export type SectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChapterBookIdChapterNoCompoundUniqueInput = {
    bookId: string
    chapterNo: number
  }

  export type ChapterCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    chapterNo?: SortOrder
    startPage?: SortOrder
    endPage?: SortOrder
    bookId?: SortOrder
  }

  export type ChapterAvgOrderByAggregateInput = {
    chapterNo?: SortOrder
    startPage?: SortOrder
    endPage?: SortOrder
  }

  export type ChapterMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    chapterNo?: SortOrder
    startPage?: SortOrder
    endPage?: SortOrder
    bookId?: SortOrder
  }

  export type ChapterMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    chapterNo?: SortOrder
    startPage?: SortOrder
    endPage?: SortOrder
    bookId?: SortOrder
  }

  export type ChapterSumOrderByAggregateInput = {
    chapterNo?: SortOrder
    startPage?: SortOrder
    endPage?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ChapterScalarRelationFilter = {
    is?: ChapterWhereInput
    isNot?: ChapterWhereInput
  }

  export type SectionChapterIdSectionNoCompoundUniqueInput = {
    chapterId: string
    sectionNo: number
  }

  export type SectionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    sectionNo?: SortOrder
    content?: SortOrder
    chapterId?: SortOrder
  }

  export type SectionAvgOrderByAggregateInput = {
    sectionNo?: SortOrder
  }

  export type SectionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    sectionNo?: SortOrder
    content?: SortOrder
    chapterId?: SortOrder
  }

  export type SectionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    sectionNo?: SortOrder
    content?: SortOrder
    chapterId?: SortOrder
  }

  export type SectionSumOrderByAggregateInput = {
    sectionNo?: SortOrder
  }

  export type SectionNullableScalarRelationFilter = {
    is?: SectionWhereInput | null
    isNot?: SectionWhereInput | null
  }

  export type ContentChunkCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    chunkNo?: SortOrder
    pageStart?: SortOrder
    pageEnd?: SortOrder
    bookId?: SortOrder
    sectionId?: SortOrder
  }

  export type ContentChunkAvgOrderByAggregateInput = {
    chunkNo?: SortOrder
    pageStart?: SortOrder
    pageEnd?: SortOrder
  }

  export type ContentChunkMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    chunkNo?: SortOrder
    pageStart?: SortOrder
    pageEnd?: SortOrder
    bookId?: SortOrder
    sectionId?: SortOrder
  }

  export type ContentChunkMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    chunkNo?: SortOrder
    pageStart?: SortOrder
    pageEnd?: SortOrder
    bookId?: SortOrder
    sectionId?: SortOrder
  }

  export type ContentChunkSumOrderByAggregateInput = {
    chunkNo?: SortOrder
    pageStart?: SortOrder
    pageEnd?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ReadingProgressUserIdBookIdCompoundUniqueInput = {
    userId: string
    bookId: string
  }

  export type ReadingProgressCountOrderByAggregateInput = {
    id?: SortOrder
    currentPage?: SortOrder
    currentChapter?: SortOrder
    progress?: SortOrder
    lastReadAt?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
  }

  export type ReadingProgressAvgOrderByAggregateInput = {
    currentPage?: SortOrder
    currentChapter?: SortOrder
    progress?: SortOrder
  }

  export type ReadingProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    currentPage?: SortOrder
    currentChapter?: SortOrder
    progress?: SortOrder
    lastReadAt?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
  }

  export type ReadingProgressMinOrderByAggregateInput = {
    id?: SortOrder
    currentPage?: SortOrder
    currentChapter?: SortOrder
    progress?: SortOrder
    lastReadAt?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
  }

  export type ReadingProgressSumOrderByAggregateInput = {
    currentPage?: SortOrder
    currentChapter?: SortOrder
    progress?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NoteNullableScalarRelationFilter = {
    is?: NoteWhereInput | null
    isNot?: NoteWhereInput | null
  }

  export type HighlightCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    color?: SortOrder
    page?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
  }

  export type HighlightAvgOrderByAggregateInput = {
    page?: SortOrder
  }

  export type HighlightMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    color?: SortOrder
    page?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
  }

  export type HighlightMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    color?: SortOrder
    page?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
  }

  export type HighlightSumOrderByAggregateInput = {
    page?: SortOrder
  }

  export type HighlightNullableScalarRelationFilter = {
    is?: HighlightWhereInput | null
    isNot?: HighlightWhereInput | null
  }

  export type NoteCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    highlightId?: SortOrder
  }

  export type NoteMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    highlightId?: SortOrder
  }

  export type NoteMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    highlightId?: SortOrder
  }

  export type ConversationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
  }

  export type ConversationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
  }

  export type ConversationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
  }

  export type UserConceptCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserConceptMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserConceptMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BookConceptCountOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
  }

  export type BookConceptMaxOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
  }

  export type BookConceptMinOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
  }

  export type BookCreateNestedManyWithoutUserInput = {
    create?: XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput> | BookCreateWithoutUserInput[] | BookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookCreateOrConnectWithoutUserInput | BookCreateOrConnectWithoutUserInput[]
    createMany?: BookCreateManyUserInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type ReadingProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<ReadingProgressCreateWithoutUserInput, ReadingProgressUncheckedCreateWithoutUserInput> | ReadingProgressCreateWithoutUserInput[] | ReadingProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReadingProgressCreateOrConnectWithoutUserInput | ReadingProgressCreateOrConnectWithoutUserInput[]
    createMany?: ReadingProgressCreateManyUserInputEnvelope
    connect?: ReadingProgressWhereUniqueInput | ReadingProgressWhereUniqueInput[]
  }

  export type HighlightCreateNestedManyWithoutUserInput = {
    create?: XOR<HighlightCreateWithoutUserInput, HighlightUncheckedCreateWithoutUserInput> | HighlightCreateWithoutUserInput[] | HighlightUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HighlightCreateOrConnectWithoutUserInput | HighlightCreateOrConnectWithoutUserInput[]
    createMany?: HighlightCreateManyUserInputEnvelope
    connect?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
  }

  export type NoteCreateNestedManyWithoutUserInput = {
    create?: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput> | NoteCreateWithoutUserInput[] | NoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutUserInput | NoteCreateOrConnectWithoutUserInput[]
    createMany?: NoteCreateManyUserInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type ConversationCreateNestedManyWithoutUserInput = {
    create?: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput> | ConversationCreateWithoutUserInput[] | ConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUserInput | ConversationCreateOrConnectWithoutUserInput[]
    createMany?: ConversationCreateManyUserInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type UserConceptCreateNestedManyWithoutUserInput = {
    create?: XOR<UserConceptCreateWithoutUserInput, UserConceptUncheckedCreateWithoutUserInput> | UserConceptCreateWithoutUserInput[] | UserConceptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserConceptCreateOrConnectWithoutUserInput | UserConceptCreateOrConnectWithoutUserInput[]
    createMany?: UserConceptCreateManyUserInputEnvelope
    connect?: UserConceptWhereUniqueInput | UserConceptWhereUniqueInput[]
  }

  export type BookUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput> | BookCreateWithoutUserInput[] | BookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookCreateOrConnectWithoutUserInput | BookCreateOrConnectWithoutUserInput[]
    createMany?: BookCreateManyUserInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type ReadingProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReadingProgressCreateWithoutUserInput, ReadingProgressUncheckedCreateWithoutUserInput> | ReadingProgressCreateWithoutUserInput[] | ReadingProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReadingProgressCreateOrConnectWithoutUserInput | ReadingProgressCreateOrConnectWithoutUserInput[]
    createMany?: ReadingProgressCreateManyUserInputEnvelope
    connect?: ReadingProgressWhereUniqueInput | ReadingProgressWhereUniqueInput[]
  }

  export type HighlightUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HighlightCreateWithoutUserInput, HighlightUncheckedCreateWithoutUserInput> | HighlightCreateWithoutUserInput[] | HighlightUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HighlightCreateOrConnectWithoutUserInput | HighlightCreateOrConnectWithoutUserInput[]
    createMany?: HighlightCreateManyUserInputEnvelope
    connect?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
  }

  export type NoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput> | NoteCreateWithoutUserInput[] | NoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutUserInput | NoteCreateOrConnectWithoutUserInput[]
    createMany?: NoteCreateManyUserInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type ConversationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput> | ConversationCreateWithoutUserInput[] | ConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUserInput | ConversationCreateOrConnectWithoutUserInput[]
    createMany?: ConversationCreateManyUserInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type UserConceptUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserConceptCreateWithoutUserInput, UserConceptUncheckedCreateWithoutUserInput> | UserConceptCreateWithoutUserInput[] | UserConceptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserConceptCreateOrConnectWithoutUserInput | UserConceptCreateOrConnectWithoutUserInput[]
    createMany?: UserConceptCreateManyUserInputEnvelope
    connect?: UserConceptWhereUniqueInput | UserConceptWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BookUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput> | BookCreateWithoutUserInput[] | BookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookCreateOrConnectWithoutUserInput | BookCreateOrConnectWithoutUserInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutUserInput | BookUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookCreateManyUserInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutUserInput | BookUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookUpdateManyWithWhereWithoutUserInput | BookUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type ReadingProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReadingProgressCreateWithoutUserInput, ReadingProgressUncheckedCreateWithoutUserInput> | ReadingProgressCreateWithoutUserInput[] | ReadingProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReadingProgressCreateOrConnectWithoutUserInput | ReadingProgressCreateOrConnectWithoutUserInput[]
    upsert?: ReadingProgressUpsertWithWhereUniqueWithoutUserInput | ReadingProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReadingProgressCreateManyUserInputEnvelope
    set?: ReadingProgressWhereUniqueInput | ReadingProgressWhereUniqueInput[]
    disconnect?: ReadingProgressWhereUniqueInput | ReadingProgressWhereUniqueInput[]
    delete?: ReadingProgressWhereUniqueInput | ReadingProgressWhereUniqueInput[]
    connect?: ReadingProgressWhereUniqueInput | ReadingProgressWhereUniqueInput[]
    update?: ReadingProgressUpdateWithWhereUniqueWithoutUserInput | ReadingProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReadingProgressUpdateManyWithWhereWithoutUserInput | ReadingProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReadingProgressScalarWhereInput | ReadingProgressScalarWhereInput[]
  }

  export type HighlightUpdateManyWithoutUserNestedInput = {
    create?: XOR<HighlightCreateWithoutUserInput, HighlightUncheckedCreateWithoutUserInput> | HighlightCreateWithoutUserInput[] | HighlightUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HighlightCreateOrConnectWithoutUserInput | HighlightCreateOrConnectWithoutUserInput[]
    upsert?: HighlightUpsertWithWhereUniqueWithoutUserInput | HighlightUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HighlightCreateManyUserInputEnvelope
    set?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
    disconnect?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
    delete?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
    connect?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
    update?: HighlightUpdateWithWhereUniqueWithoutUserInput | HighlightUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HighlightUpdateManyWithWhereWithoutUserInput | HighlightUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HighlightScalarWhereInput | HighlightScalarWhereInput[]
  }

  export type NoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput> | NoteCreateWithoutUserInput[] | NoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutUserInput | NoteCreateOrConnectWithoutUserInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutUserInput | NoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NoteCreateManyUserInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutUserInput | NoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutUserInput | NoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type ConversationUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput> | ConversationCreateWithoutUserInput[] | ConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUserInput | ConversationCreateOrConnectWithoutUserInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutUserInput | ConversationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConversationCreateManyUserInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutUserInput | ConversationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutUserInput | ConversationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type UserConceptUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserConceptCreateWithoutUserInput, UserConceptUncheckedCreateWithoutUserInput> | UserConceptCreateWithoutUserInput[] | UserConceptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserConceptCreateOrConnectWithoutUserInput | UserConceptCreateOrConnectWithoutUserInput[]
    upsert?: UserConceptUpsertWithWhereUniqueWithoutUserInput | UserConceptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserConceptCreateManyUserInputEnvelope
    set?: UserConceptWhereUniqueInput | UserConceptWhereUniqueInput[]
    disconnect?: UserConceptWhereUniqueInput | UserConceptWhereUniqueInput[]
    delete?: UserConceptWhereUniqueInput | UserConceptWhereUniqueInput[]
    connect?: UserConceptWhereUniqueInput | UserConceptWhereUniqueInput[]
    update?: UserConceptUpdateWithWhereUniqueWithoutUserInput | UserConceptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserConceptUpdateManyWithWhereWithoutUserInput | UserConceptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserConceptScalarWhereInput | UserConceptScalarWhereInput[]
  }

  export type BookUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput> | BookCreateWithoutUserInput[] | BookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookCreateOrConnectWithoutUserInput | BookCreateOrConnectWithoutUserInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutUserInput | BookUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookCreateManyUserInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutUserInput | BookUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookUpdateManyWithWhereWithoutUserInput | BookUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type ReadingProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReadingProgressCreateWithoutUserInput, ReadingProgressUncheckedCreateWithoutUserInput> | ReadingProgressCreateWithoutUserInput[] | ReadingProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReadingProgressCreateOrConnectWithoutUserInput | ReadingProgressCreateOrConnectWithoutUserInput[]
    upsert?: ReadingProgressUpsertWithWhereUniqueWithoutUserInput | ReadingProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReadingProgressCreateManyUserInputEnvelope
    set?: ReadingProgressWhereUniqueInput | ReadingProgressWhereUniqueInput[]
    disconnect?: ReadingProgressWhereUniqueInput | ReadingProgressWhereUniqueInput[]
    delete?: ReadingProgressWhereUniqueInput | ReadingProgressWhereUniqueInput[]
    connect?: ReadingProgressWhereUniqueInput | ReadingProgressWhereUniqueInput[]
    update?: ReadingProgressUpdateWithWhereUniqueWithoutUserInput | ReadingProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReadingProgressUpdateManyWithWhereWithoutUserInput | ReadingProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReadingProgressScalarWhereInput | ReadingProgressScalarWhereInput[]
  }

  export type HighlightUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HighlightCreateWithoutUserInput, HighlightUncheckedCreateWithoutUserInput> | HighlightCreateWithoutUserInput[] | HighlightUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HighlightCreateOrConnectWithoutUserInput | HighlightCreateOrConnectWithoutUserInput[]
    upsert?: HighlightUpsertWithWhereUniqueWithoutUserInput | HighlightUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HighlightCreateManyUserInputEnvelope
    set?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
    disconnect?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
    delete?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
    connect?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
    update?: HighlightUpdateWithWhereUniqueWithoutUserInput | HighlightUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HighlightUpdateManyWithWhereWithoutUserInput | HighlightUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HighlightScalarWhereInput | HighlightScalarWhereInput[]
  }

  export type NoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput> | NoteCreateWithoutUserInput[] | NoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutUserInput | NoteCreateOrConnectWithoutUserInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutUserInput | NoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NoteCreateManyUserInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutUserInput | NoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutUserInput | NoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type ConversationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput> | ConversationCreateWithoutUserInput[] | ConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUserInput | ConversationCreateOrConnectWithoutUserInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutUserInput | ConversationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConversationCreateManyUserInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutUserInput | ConversationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutUserInput | ConversationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type UserConceptUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserConceptCreateWithoutUserInput, UserConceptUncheckedCreateWithoutUserInput> | UserConceptCreateWithoutUserInput[] | UserConceptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserConceptCreateOrConnectWithoutUserInput | UserConceptCreateOrConnectWithoutUserInput[]
    upsert?: UserConceptUpsertWithWhereUniqueWithoutUserInput | UserConceptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserConceptCreateManyUserInputEnvelope
    set?: UserConceptWhereUniqueInput | UserConceptWhereUniqueInput[]
    disconnect?: UserConceptWhereUniqueInput | UserConceptWhereUniqueInput[]
    delete?: UserConceptWhereUniqueInput | UserConceptWhereUniqueInput[]
    connect?: UserConceptWhereUniqueInput | UserConceptWhereUniqueInput[]
    update?: UserConceptUpdateWithWhereUniqueWithoutUserInput | UserConceptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserConceptUpdateManyWithWhereWithoutUserInput | UserConceptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserConceptScalarWhereInput | UserConceptScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBooksInput = {
    create?: XOR<UserCreateWithoutBooksInput, UserUncheckedCreateWithoutBooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutBooksInput
    connect?: UserWhereUniqueInput
  }

  export type ChapterCreateNestedManyWithoutBookInput = {
    create?: XOR<ChapterCreateWithoutBookInput, ChapterUncheckedCreateWithoutBookInput> | ChapterCreateWithoutBookInput[] | ChapterUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutBookInput | ChapterCreateOrConnectWithoutBookInput[]
    createMany?: ChapterCreateManyBookInputEnvelope
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
  }

  export type ReadingProgressCreateNestedOneWithoutBookInput = {
    create?: XOR<ReadingProgressCreateWithoutBookInput, ReadingProgressUncheckedCreateWithoutBookInput>
    connectOrCreate?: ReadingProgressCreateOrConnectWithoutBookInput
    connect?: ReadingProgressWhereUniqueInput
  }

  export type HighlightCreateNestedManyWithoutBookInput = {
    create?: XOR<HighlightCreateWithoutBookInput, HighlightUncheckedCreateWithoutBookInput> | HighlightCreateWithoutBookInput[] | HighlightUncheckedCreateWithoutBookInput[]
    connectOrCreate?: HighlightCreateOrConnectWithoutBookInput | HighlightCreateOrConnectWithoutBookInput[]
    createMany?: HighlightCreateManyBookInputEnvelope
    connect?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
  }

  export type NoteCreateNestedManyWithoutBookInput = {
    create?: XOR<NoteCreateWithoutBookInput, NoteUncheckedCreateWithoutBookInput> | NoteCreateWithoutBookInput[] | NoteUncheckedCreateWithoutBookInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutBookInput | NoteCreateOrConnectWithoutBookInput[]
    createMany?: NoteCreateManyBookInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type ContentChunkCreateNestedManyWithoutBookInput = {
    create?: XOR<ContentChunkCreateWithoutBookInput, ContentChunkUncheckedCreateWithoutBookInput> | ContentChunkCreateWithoutBookInput[] | ContentChunkUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ContentChunkCreateOrConnectWithoutBookInput | ContentChunkCreateOrConnectWithoutBookInput[]
    createMany?: ContentChunkCreateManyBookInputEnvelope
    connect?: ContentChunkWhereUniqueInput | ContentChunkWhereUniqueInput[]
  }

  export type BookConceptCreateNestedManyWithoutBookInput = {
    create?: XOR<BookConceptCreateWithoutBookInput, BookConceptUncheckedCreateWithoutBookInput> | BookConceptCreateWithoutBookInput[] | BookConceptUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookConceptCreateOrConnectWithoutBookInput | BookConceptCreateOrConnectWithoutBookInput[]
    createMany?: BookConceptCreateManyBookInputEnvelope
    connect?: BookConceptWhereUniqueInput | BookConceptWhereUniqueInput[]
  }

  export type ConversationCreateNestedManyWithoutBookInput = {
    create?: XOR<ConversationCreateWithoutBookInput, ConversationUncheckedCreateWithoutBookInput> | ConversationCreateWithoutBookInput[] | ConversationUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutBookInput | ConversationCreateOrConnectWithoutBookInput[]
    createMany?: ConversationCreateManyBookInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type ChapterUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<ChapterCreateWithoutBookInput, ChapterUncheckedCreateWithoutBookInput> | ChapterCreateWithoutBookInput[] | ChapterUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutBookInput | ChapterCreateOrConnectWithoutBookInput[]
    createMany?: ChapterCreateManyBookInputEnvelope
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
  }

  export type ReadingProgressUncheckedCreateNestedOneWithoutBookInput = {
    create?: XOR<ReadingProgressCreateWithoutBookInput, ReadingProgressUncheckedCreateWithoutBookInput>
    connectOrCreate?: ReadingProgressCreateOrConnectWithoutBookInput
    connect?: ReadingProgressWhereUniqueInput
  }

  export type HighlightUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<HighlightCreateWithoutBookInput, HighlightUncheckedCreateWithoutBookInput> | HighlightCreateWithoutBookInput[] | HighlightUncheckedCreateWithoutBookInput[]
    connectOrCreate?: HighlightCreateOrConnectWithoutBookInput | HighlightCreateOrConnectWithoutBookInput[]
    createMany?: HighlightCreateManyBookInputEnvelope
    connect?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
  }

  export type NoteUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<NoteCreateWithoutBookInput, NoteUncheckedCreateWithoutBookInput> | NoteCreateWithoutBookInput[] | NoteUncheckedCreateWithoutBookInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutBookInput | NoteCreateOrConnectWithoutBookInput[]
    createMany?: NoteCreateManyBookInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type ContentChunkUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<ContentChunkCreateWithoutBookInput, ContentChunkUncheckedCreateWithoutBookInput> | ContentChunkCreateWithoutBookInput[] | ContentChunkUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ContentChunkCreateOrConnectWithoutBookInput | ContentChunkCreateOrConnectWithoutBookInput[]
    createMany?: ContentChunkCreateManyBookInputEnvelope
    connect?: ContentChunkWhereUniqueInput | ContentChunkWhereUniqueInput[]
  }

  export type BookConceptUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<BookConceptCreateWithoutBookInput, BookConceptUncheckedCreateWithoutBookInput> | BookConceptCreateWithoutBookInput[] | BookConceptUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookConceptCreateOrConnectWithoutBookInput | BookConceptCreateOrConnectWithoutBookInput[]
    createMany?: BookConceptCreateManyBookInputEnvelope
    connect?: BookConceptWhereUniqueInput | BookConceptWhereUniqueInput[]
  }

  export type ConversationUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<ConversationCreateWithoutBookInput, ConversationUncheckedCreateWithoutBookInput> | ConversationCreateWithoutBookInput[] | ConversationUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutBookInput | ConversationCreateOrConnectWithoutBookInput[]
    createMany?: ConversationCreateManyBookInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type EnumBookFileTypeFieldUpdateOperationsInput = {
    set?: $Enums.BookFileType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutBooksNestedInput = {
    create?: XOR<UserCreateWithoutBooksInput, UserUncheckedCreateWithoutBooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutBooksInput
    upsert?: UserUpsertWithoutBooksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBooksInput, UserUpdateWithoutBooksInput>, UserUncheckedUpdateWithoutBooksInput>
  }

  export type ChapterUpdateManyWithoutBookNestedInput = {
    create?: XOR<ChapterCreateWithoutBookInput, ChapterUncheckedCreateWithoutBookInput> | ChapterCreateWithoutBookInput[] | ChapterUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutBookInput | ChapterCreateOrConnectWithoutBookInput[]
    upsert?: ChapterUpsertWithWhereUniqueWithoutBookInput | ChapterUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: ChapterCreateManyBookInputEnvelope
    set?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    disconnect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    delete?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    update?: ChapterUpdateWithWhereUniqueWithoutBookInput | ChapterUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: ChapterUpdateManyWithWhereWithoutBookInput | ChapterUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
  }

  export type ReadingProgressUpdateOneWithoutBookNestedInput = {
    create?: XOR<ReadingProgressCreateWithoutBookInput, ReadingProgressUncheckedCreateWithoutBookInput>
    connectOrCreate?: ReadingProgressCreateOrConnectWithoutBookInput
    upsert?: ReadingProgressUpsertWithoutBookInput
    disconnect?: ReadingProgressWhereInput | boolean
    delete?: ReadingProgressWhereInput | boolean
    connect?: ReadingProgressWhereUniqueInput
    update?: XOR<XOR<ReadingProgressUpdateToOneWithWhereWithoutBookInput, ReadingProgressUpdateWithoutBookInput>, ReadingProgressUncheckedUpdateWithoutBookInput>
  }

  export type HighlightUpdateManyWithoutBookNestedInput = {
    create?: XOR<HighlightCreateWithoutBookInput, HighlightUncheckedCreateWithoutBookInput> | HighlightCreateWithoutBookInput[] | HighlightUncheckedCreateWithoutBookInput[]
    connectOrCreate?: HighlightCreateOrConnectWithoutBookInput | HighlightCreateOrConnectWithoutBookInput[]
    upsert?: HighlightUpsertWithWhereUniqueWithoutBookInput | HighlightUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: HighlightCreateManyBookInputEnvelope
    set?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
    disconnect?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
    delete?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
    connect?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
    update?: HighlightUpdateWithWhereUniqueWithoutBookInput | HighlightUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: HighlightUpdateManyWithWhereWithoutBookInput | HighlightUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: HighlightScalarWhereInput | HighlightScalarWhereInput[]
  }

  export type NoteUpdateManyWithoutBookNestedInput = {
    create?: XOR<NoteCreateWithoutBookInput, NoteUncheckedCreateWithoutBookInput> | NoteCreateWithoutBookInput[] | NoteUncheckedCreateWithoutBookInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutBookInput | NoteCreateOrConnectWithoutBookInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutBookInput | NoteUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: NoteCreateManyBookInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutBookInput | NoteUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutBookInput | NoteUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type ContentChunkUpdateManyWithoutBookNestedInput = {
    create?: XOR<ContentChunkCreateWithoutBookInput, ContentChunkUncheckedCreateWithoutBookInput> | ContentChunkCreateWithoutBookInput[] | ContentChunkUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ContentChunkCreateOrConnectWithoutBookInput | ContentChunkCreateOrConnectWithoutBookInput[]
    upsert?: ContentChunkUpsertWithWhereUniqueWithoutBookInput | ContentChunkUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: ContentChunkCreateManyBookInputEnvelope
    set?: ContentChunkWhereUniqueInput | ContentChunkWhereUniqueInput[]
    disconnect?: ContentChunkWhereUniqueInput | ContentChunkWhereUniqueInput[]
    delete?: ContentChunkWhereUniqueInput | ContentChunkWhereUniqueInput[]
    connect?: ContentChunkWhereUniqueInput | ContentChunkWhereUniqueInput[]
    update?: ContentChunkUpdateWithWhereUniqueWithoutBookInput | ContentChunkUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: ContentChunkUpdateManyWithWhereWithoutBookInput | ContentChunkUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: ContentChunkScalarWhereInput | ContentChunkScalarWhereInput[]
  }

  export type BookConceptUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookConceptCreateWithoutBookInput, BookConceptUncheckedCreateWithoutBookInput> | BookConceptCreateWithoutBookInput[] | BookConceptUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookConceptCreateOrConnectWithoutBookInput | BookConceptCreateOrConnectWithoutBookInput[]
    upsert?: BookConceptUpsertWithWhereUniqueWithoutBookInput | BookConceptUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookConceptCreateManyBookInputEnvelope
    set?: BookConceptWhereUniqueInput | BookConceptWhereUniqueInput[]
    disconnect?: BookConceptWhereUniqueInput | BookConceptWhereUniqueInput[]
    delete?: BookConceptWhereUniqueInput | BookConceptWhereUniqueInput[]
    connect?: BookConceptWhereUniqueInput | BookConceptWhereUniqueInput[]
    update?: BookConceptUpdateWithWhereUniqueWithoutBookInput | BookConceptUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookConceptUpdateManyWithWhereWithoutBookInput | BookConceptUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookConceptScalarWhereInput | BookConceptScalarWhereInput[]
  }

  export type ConversationUpdateManyWithoutBookNestedInput = {
    create?: XOR<ConversationCreateWithoutBookInput, ConversationUncheckedCreateWithoutBookInput> | ConversationCreateWithoutBookInput[] | ConversationUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutBookInput | ConversationCreateOrConnectWithoutBookInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutBookInput | ConversationUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: ConversationCreateManyBookInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutBookInput | ConversationUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutBookInput | ConversationUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type ChapterUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<ChapterCreateWithoutBookInput, ChapterUncheckedCreateWithoutBookInput> | ChapterCreateWithoutBookInput[] | ChapterUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutBookInput | ChapterCreateOrConnectWithoutBookInput[]
    upsert?: ChapterUpsertWithWhereUniqueWithoutBookInput | ChapterUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: ChapterCreateManyBookInputEnvelope
    set?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    disconnect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    delete?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    update?: ChapterUpdateWithWhereUniqueWithoutBookInput | ChapterUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: ChapterUpdateManyWithWhereWithoutBookInput | ChapterUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
  }

  export type ReadingProgressUncheckedUpdateOneWithoutBookNestedInput = {
    create?: XOR<ReadingProgressCreateWithoutBookInput, ReadingProgressUncheckedCreateWithoutBookInput>
    connectOrCreate?: ReadingProgressCreateOrConnectWithoutBookInput
    upsert?: ReadingProgressUpsertWithoutBookInput
    disconnect?: ReadingProgressWhereInput | boolean
    delete?: ReadingProgressWhereInput | boolean
    connect?: ReadingProgressWhereUniqueInput
    update?: XOR<XOR<ReadingProgressUpdateToOneWithWhereWithoutBookInput, ReadingProgressUpdateWithoutBookInput>, ReadingProgressUncheckedUpdateWithoutBookInput>
  }

  export type HighlightUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<HighlightCreateWithoutBookInput, HighlightUncheckedCreateWithoutBookInput> | HighlightCreateWithoutBookInput[] | HighlightUncheckedCreateWithoutBookInput[]
    connectOrCreate?: HighlightCreateOrConnectWithoutBookInput | HighlightCreateOrConnectWithoutBookInput[]
    upsert?: HighlightUpsertWithWhereUniqueWithoutBookInput | HighlightUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: HighlightCreateManyBookInputEnvelope
    set?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
    disconnect?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
    delete?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
    connect?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
    update?: HighlightUpdateWithWhereUniqueWithoutBookInput | HighlightUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: HighlightUpdateManyWithWhereWithoutBookInput | HighlightUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: HighlightScalarWhereInput | HighlightScalarWhereInput[]
  }

  export type NoteUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<NoteCreateWithoutBookInput, NoteUncheckedCreateWithoutBookInput> | NoteCreateWithoutBookInput[] | NoteUncheckedCreateWithoutBookInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutBookInput | NoteCreateOrConnectWithoutBookInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutBookInput | NoteUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: NoteCreateManyBookInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutBookInput | NoteUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutBookInput | NoteUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type ContentChunkUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<ContentChunkCreateWithoutBookInput, ContentChunkUncheckedCreateWithoutBookInput> | ContentChunkCreateWithoutBookInput[] | ContentChunkUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ContentChunkCreateOrConnectWithoutBookInput | ContentChunkCreateOrConnectWithoutBookInput[]
    upsert?: ContentChunkUpsertWithWhereUniqueWithoutBookInput | ContentChunkUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: ContentChunkCreateManyBookInputEnvelope
    set?: ContentChunkWhereUniqueInput | ContentChunkWhereUniqueInput[]
    disconnect?: ContentChunkWhereUniqueInput | ContentChunkWhereUniqueInput[]
    delete?: ContentChunkWhereUniqueInput | ContentChunkWhereUniqueInput[]
    connect?: ContentChunkWhereUniqueInput | ContentChunkWhereUniqueInput[]
    update?: ContentChunkUpdateWithWhereUniqueWithoutBookInput | ContentChunkUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: ContentChunkUpdateManyWithWhereWithoutBookInput | ContentChunkUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: ContentChunkScalarWhereInput | ContentChunkScalarWhereInput[]
  }

  export type BookConceptUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookConceptCreateWithoutBookInput, BookConceptUncheckedCreateWithoutBookInput> | BookConceptCreateWithoutBookInput[] | BookConceptUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookConceptCreateOrConnectWithoutBookInput | BookConceptCreateOrConnectWithoutBookInput[]
    upsert?: BookConceptUpsertWithWhereUniqueWithoutBookInput | BookConceptUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookConceptCreateManyBookInputEnvelope
    set?: BookConceptWhereUniqueInput | BookConceptWhereUniqueInput[]
    disconnect?: BookConceptWhereUniqueInput | BookConceptWhereUniqueInput[]
    delete?: BookConceptWhereUniqueInput | BookConceptWhereUniqueInput[]
    connect?: BookConceptWhereUniqueInput | BookConceptWhereUniqueInput[]
    update?: BookConceptUpdateWithWhereUniqueWithoutBookInput | BookConceptUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookConceptUpdateManyWithWhereWithoutBookInput | BookConceptUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookConceptScalarWhereInput | BookConceptScalarWhereInput[]
  }

  export type ConversationUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<ConversationCreateWithoutBookInput, ConversationUncheckedCreateWithoutBookInput> | ConversationCreateWithoutBookInput[] | ConversationUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutBookInput | ConversationCreateOrConnectWithoutBookInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutBookInput | ConversationUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: ConversationCreateManyBookInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutBookInput | ConversationUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutBookInput | ConversationUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type BookCreateNestedOneWithoutChaptersInput = {
    create?: XOR<BookCreateWithoutChaptersInput, BookUncheckedCreateWithoutChaptersInput>
    connectOrCreate?: BookCreateOrConnectWithoutChaptersInput
    connect?: BookWhereUniqueInput
  }

  export type SectionCreateNestedManyWithoutChapterInput = {
    create?: XOR<SectionCreateWithoutChapterInput, SectionUncheckedCreateWithoutChapterInput> | SectionCreateWithoutChapterInput[] | SectionUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutChapterInput | SectionCreateOrConnectWithoutChapterInput[]
    createMany?: SectionCreateManyChapterInputEnvelope
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
  }

  export type SectionUncheckedCreateNestedManyWithoutChapterInput = {
    create?: XOR<SectionCreateWithoutChapterInput, SectionUncheckedCreateWithoutChapterInput> | SectionCreateWithoutChapterInput[] | SectionUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutChapterInput | SectionCreateOrConnectWithoutChapterInput[]
    createMany?: SectionCreateManyChapterInputEnvelope
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BookUpdateOneRequiredWithoutChaptersNestedInput = {
    create?: XOR<BookCreateWithoutChaptersInput, BookUncheckedCreateWithoutChaptersInput>
    connectOrCreate?: BookCreateOrConnectWithoutChaptersInput
    upsert?: BookUpsertWithoutChaptersInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutChaptersInput, BookUpdateWithoutChaptersInput>, BookUncheckedUpdateWithoutChaptersInput>
  }

  export type SectionUpdateManyWithoutChapterNestedInput = {
    create?: XOR<SectionCreateWithoutChapterInput, SectionUncheckedCreateWithoutChapterInput> | SectionCreateWithoutChapterInput[] | SectionUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutChapterInput | SectionCreateOrConnectWithoutChapterInput[]
    upsert?: SectionUpsertWithWhereUniqueWithoutChapterInput | SectionUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: SectionCreateManyChapterInputEnvelope
    set?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    disconnect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    delete?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    update?: SectionUpdateWithWhereUniqueWithoutChapterInput | SectionUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: SectionUpdateManyWithWhereWithoutChapterInput | SectionUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: SectionScalarWhereInput | SectionScalarWhereInput[]
  }

  export type SectionUncheckedUpdateManyWithoutChapterNestedInput = {
    create?: XOR<SectionCreateWithoutChapterInput, SectionUncheckedCreateWithoutChapterInput> | SectionCreateWithoutChapterInput[] | SectionUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutChapterInput | SectionCreateOrConnectWithoutChapterInput[]
    upsert?: SectionUpsertWithWhereUniqueWithoutChapterInput | SectionUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: SectionCreateManyChapterInputEnvelope
    set?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    disconnect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    delete?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    update?: SectionUpdateWithWhereUniqueWithoutChapterInput | SectionUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: SectionUpdateManyWithWhereWithoutChapterInput | SectionUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: SectionScalarWhereInput | SectionScalarWhereInput[]
  }

  export type ChapterCreateNestedOneWithoutSectionsInput = {
    create?: XOR<ChapterCreateWithoutSectionsInput, ChapterUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutSectionsInput
    connect?: ChapterWhereUniqueInput
  }

  export type ContentChunkCreateNestedManyWithoutSectionInput = {
    create?: XOR<ContentChunkCreateWithoutSectionInput, ContentChunkUncheckedCreateWithoutSectionInput> | ContentChunkCreateWithoutSectionInput[] | ContentChunkUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ContentChunkCreateOrConnectWithoutSectionInput | ContentChunkCreateOrConnectWithoutSectionInput[]
    createMany?: ContentChunkCreateManySectionInputEnvelope
    connect?: ContentChunkWhereUniqueInput | ContentChunkWhereUniqueInput[]
  }

  export type ContentChunkUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<ContentChunkCreateWithoutSectionInput, ContentChunkUncheckedCreateWithoutSectionInput> | ContentChunkCreateWithoutSectionInput[] | ContentChunkUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ContentChunkCreateOrConnectWithoutSectionInput | ContentChunkCreateOrConnectWithoutSectionInput[]
    createMany?: ContentChunkCreateManySectionInputEnvelope
    connect?: ContentChunkWhereUniqueInput | ContentChunkWhereUniqueInput[]
  }

  export type ChapterUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: XOR<ChapterCreateWithoutSectionsInput, ChapterUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutSectionsInput
    upsert?: ChapterUpsertWithoutSectionsInput
    connect?: ChapterWhereUniqueInput
    update?: XOR<XOR<ChapterUpdateToOneWithWhereWithoutSectionsInput, ChapterUpdateWithoutSectionsInput>, ChapterUncheckedUpdateWithoutSectionsInput>
  }

  export type ContentChunkUpdateManyWithoutSectionNestedInput = {
    create?: XOR<ContentChunkCreateWithoutSectionInput, ContentChunkUncheckedCreateWithoutSectionInput> | ContentChunkCreateWithoutSectionInput[] | ContentChunkUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ContentChunkCreateOrConnectWithoutSectionInput | ContentChunkCreateOrConnectWithoutSectionInput[]
    upsert?: ContentChunkUpsertWithWhereUniqueWithoutSectionInput | ContentChunkUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: ContentChunkCreateManySectionInputEnvelope
    set?: ContentChunkWhereUniqueInput | ContentChunkWhereUniqueInput[]
    disconnect?: ContentChunkWhereUniqueInput | ContentChunkWhereUniqueInput[]
    delete?: ContentChunkWhereUniqueInput | ContentChunkWhereUniqueInput[]
    connect?: ContentChunkWhereUniqueInput | ContentChunkWhereUniqueInput[]
    update?: ContentChunkUpdateWithWhereUniqueWithoutSectionInput | ContentChunkUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: ContentChunkUpdateManyWithWhereWithoutSectionInput | ContentChunkUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: ContentChunkScalarWhereInput | ContentChunkScalarWhereInput[]
  }

  export type ContentChunkUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<ContentChunkCreateWithoutSectionInput, ContentChunkUncheckedCreateWithoutSectionInput> | ContentChunkCreateWithoutSectionInput[] | ContentChunkUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ContentChunkCreateOrConnectWithoutSectionInput | ContentChunkCreateOrConnectWithoutSectionInput[]
    upsert?: ContentChunkUpsertWithWhereUniqueWithoutSectionInput | ContentChunkUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: ContentChunkCreateManySectionInputEnvelope
    set?: ContentChunkWhereUniqueInput | ContentChunkWhereUniqueInput[]
    disconnect?: ContentChunkWhereUniqueInput | ContentChunkWhereUniqueInput[]
    delete?: ContentChunkWhereUniqueInput | ContentChunkWhereUniqueInput[]
    connect?: ContentChunkWhereUniqueInput | ContentChunkWhereUniqueInput[]
    update?: ContentChunkUpdateWithWhereUniqueWithoutSectionInput | ContentChunkUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: ContentChunkUpdateManyWithWhereWithoutSectionInput | ContentChunkUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: ContentChunkScalarWhereInput | ContentChunkScalarWhereInput[]
  }

  export type BookCreateNestedOneWithoutChunksInput = {
    create?: XOR<BookCreateWithoutChunksInput, BookUncheckedCreateWithoutChunksInput>
    connectOrCreate?: BookCreateOrConnectWithoutChunksInput
    connect?: BookWhereUniqueInput
  }

  export type SectionCreateNestedOneWithoutChunksInput = {
    create?: XOR<SectionCreateWithoutChunksInput, SectionUncheckedCreateWithoutChunksInput>
    connectOrCreate?: SectionCreateOrConnectWithoutChunksInput
    connect?: SectionWhereUniqueInput
  }

  export type BookUpdateOneRequiredWithoutChunksNestedInput = {
    create?: XOR<BookCreateWithoutChunksInput, BookUncheckedCreateWithoutChunksInput>
    connectOrCreate?: BookCreateOrConnectWithoutChunksInput
    upsert?: BookUpsertWithoutChunksInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutChunksInput, BookUpdateWithoutChunksInput>, BookUncheckedUpdateWithoutChunksInput>
  }

  export type SectionUpdateOneWithoutChunksNestedInput = {
    create?: XOR<SectionCreateWithoutChunksInput, SectionUncheckedCreateWithoutChunksInput>
    connectOrCreate?: SectionCreateOrConnectWithoutChunksInput
    upsert?: SectionUpsertWithoutChunksInput
    disconnect?: SectionWhereInput | boolean
    delete?: SectionWhereInput | boolean
    connect?: SectionWhereUniqueInput
    update?: XOR<XOR<SectionUpdateToOneWithWhereWithoutChunksInput, SectionUpdateWithoutChunksInput>, SectionUncheckedUpdateWithoutChunksInput>
  }

  export type UserCreateNestedOneWithoutReadingProgressInput = {
    create?: XOR<UserCreateWithoutReadingProgressInput, UserUncheckedCreateWithoutReadingProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutReadingProgressInput
    connect?: UserWhereUniqueInput
  }

  export type BookCreateNestedOneWithoutReadingProgressInput = {
    create?: XOR<BookCreateWithoutReadingProgressInput, BookUncheckedCreateWithoutReadingProgressInput>
    connectOrCreate?: BookCreateOrConnectWithoutReadingProgressInput
    connect?: BookWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutReadingProgressNestedInput = {
    create?: XOR<UserCreateWithoutReadingProgressInput, UserUncheckedCreateWithoutReadingProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutReadingProgressInput
    upsert?: UserUpsertWithoutReadingProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReadingProgressInput, UserUpdateWithoutReadingProgressInput>, UserUncheckedUpdateWithoutReadingProgressInput>
  }

  export type BookUpdateOneRequiredWithoutReadingProgressNestedInput = {
    create?: XOR<BookCreateWithoutReadingProgressInput, BookUncheckedCreateWithoutReadingProgressInput>
    connectOrCreate?: BookCreateOrConnectWithoutReadingProgressInput
    upsert?: BookUpsertWithoutReadingProgressInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutReadingProgressInput, BookUpdateWithoutReadingProgressInput>, BookUncheckedUpdateWithoutReadingProgressInput>
  }

  export type UserCreateNestedOneWithoutHighlightsInput = {
    create?: XOR<UserCreateWithoutHighlightsInput, UserUncheckedCreateWithoutHighlightsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHighlightsInput
    connect?: UserWhereUniqueInput
  }

  export type BookCreateNestedOneWithoutHighlightsInput = {
    create?: XOR<BookCreateWithoutHighlightsInput, BookUncheckedCreateWithoutHighlightsInput>
    connectOrCreate?: BookCreateOrConnectWithoutHighlightsInput
    connect?: BookWhereUniqueInput
  }

  export type NoteCreateNestedOneWithoutHighlightInput = {
    create?: XOR<NoteCreateWithoutHighlightInput, NoteUncheckedCreateWithoutHighlightInput>
    connectOrCreate?: NoteCreateOrConnectWithoutHighlightInput
    connect?: NoteWhereUniqueInput
  }

  export type NoteUncheckedCreateNestedOneWithoutHighlightInput = {
    create?: XOR<NoteCreateWithoutHighlightInput, NoteUncheckedCreateWithoutHighlightInput>
    connectOrCreate?: NoteCreateOrConnectWithoutHighlightInput
    connect?: NoteWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutHighlightsNestedInput = {
    create?: XOR<UserCreateWithoutHighlightsInput, UserUncheckedCreateWithoutHighlightsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHighlightsInput
    upsert?: UserUpsertWithoutHighlightsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHighlightsInput, UserUpdateWithoutHighlightsInput>, UserUncheckedUpdateWithoutHighlightsInput>
  }

  export type BookUpdateOneRequiredWithoutHighlightsNestedInput = {
    create?: XOR<BookCreateWithoutHighlightsInput, BookUncheckedCreateWithoutHighlightsInput>
    connectOrCreate?: BookCreateOrConnectWithoutHighlightsInput
    upsert?: BookUpsertWithoutHighlightsInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutHighlightsInput, BookUpdateWithoutHighlightsInput>, BookUncheckedUpdateWithoutHighlightsInput>
  }

  export type NoteUpdateOneWithoutHighlightNestedInput = {
    create?: XOR<NoteCreateWithoutHighlightInput, NoteUncheckedCreateWithoutHighlightInput>
    connectOrCreate?: NoteCreateOrConnectWithoutHighlightInput
    upsert?: NoteUpsertWithoutHighlightInput
    disconnect?: NoteWhereInput | boolean
    delete?: NoteWhereInput | boolean
    connect?: NoteWhereUniqueInput
    update?: XOR<XOR<NoteUpdateToOneWithWhereWithoutHighlightInput, NoteUpdateWithoutHighlightInput>, NoteUncheckedUpdateWithoutHighlightInput>
  }

  export type NoteUncheckedUpdateOneWithoutHighlightNestedInput = {
    create?: XOR<NoteCreateWithoutHighlightInput, NoteUncheckedCreateWithoutHighlightInput>
    connectOrCreate?: NoteCreateOrConnectWithoutHighlightInput
    upsert?: NoteUpsertWithoutHighlightInput
    disconnect?: NoteWhereInput | boolean
    delete?: NoteWhereInput | boolean
    connect?: NoteWhereUniqueInput
    update?: XOR<XOR<NoteUpdateToOneWithWhereWithoutHighlightInput, NoteUpdateWithoutHighlightInput>, NoteUncheckedUpdateWithoutHighlightInput>
  }

  export type UserCreateNestedOneWithoutNotesInput = {
    create?: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotesInput
    connect?: UserWhereUniqueInput
  }

  export type BookCreateNestedOneWithoutNotesInput = {
    create?: XOR<BookCreateWithoutNotesInput, BookUncheckedCreateWithoutNotesInput>
    connectOrCreate?: BookCreateOrConnectWithoutNotesInput
    connect?: BookWhereUniqueInput
  }

  export type HighlightCreateNestedOneWithoutNoteInput = {
    create?: XOR<HighlightCreateWithoutNoteInput, HighlightUncheckedCreateWithoutNoteInput>
    connectOrCreate?: HighlightCreateOrConnectWithoutNoteInput
    connect?: HighlightWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotesInput
    upsert?: UserUpsertWithoutNotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotesInput, UserUpdateWithoutNotesInput>, UserUncheckedUpdateWithoutNotesInput>
  }

  export type BookUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<BookCreateWithoutNotesInput, BookUncheckedCreateWithoutNotesInput>
    connectOrCreate?: BookCreateOrConnectWithoutNotesInput
    upsert?: BookUpsertWithoutNotesInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutNotesInput, BookUpdateWithoutNotesInput>, BookUncheckedUpdateWithoutNotesInput>
  }

  export type HighlightUpdateOneWithoutNoteNestedInput = {
    create?: XOR<HighlightCreateWithoutNoteInput, HighlightUncheckedCreateWithoutNoteInput>
    connectOrCreate?: HighlightCreateOrConnectWithoutNoteInput
    upsert?: HighlightUpsertWithoutNoteInput
    disconnect?: HighlightWhereInput | boolean
    delete?: HighlightWhereInput | boolean
    connect?: HighlightWhereUniqueInput
    update?: XOR<XOR<HighlightUpdateToOneWithWhereWithoutNoteInput, HighlightUpdateWithoutNoteInput>, HighlightUncheckedUpdateWithoutNoteInput>
  }

  export type UserCreateNestedOneWithoutConversationsInput = {
    create?: XOR<UserCreateWithoutConversationsInput, UserUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConversationsInput
    connect?: UserWhereUniqueInput
  }

  export type BookCreateNestedOneWithoutConversationsInput = {
    create?: XOR<BookCreateWithoutConversationsInput, BookUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: BookCreateOrConnectWithoutConversationsInput
    connect?: BookWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutConversationsNestedInput = {
    create?: XOR<UserCreateWithoutConversationsInput, UserUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConversationsInput
    upsert?: UserUpsertWithoutConversationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConversationsInput, UserUpdateWithoutConversationsInput>, UserUncheckedUpdateWithoutConversationsInput>
  }

  export type BookUpdateOneRequiredWithoutConversationsNestedInput = {
    create?: XOR<BookCreateWithoutConversationsInput, BookUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: BookCreateOrConnectWithoutConversationsInput
    upsert?: BookUpsertWithoutConversationsInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutConversationsInput, BookUpdateWithoutConversationsInput>, BookUncheckedUpdateWithoutConversationsInput>
  }

  export type UserCreateNestedOneWithoutUserConceptsInput = {
    create?: XOR<UserCreateWithoutUserConceptsInput, UserUncheckedCreateWithoutUserConceptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserConceptsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserConceptsNestedInput = {
    create?: XOR<UserCreateWithoutUserConceptsInput, UserUncheckedCreateWithoutUserConceptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserConceptsInput
    upsert?: UserUpsertWithoutUserConceptsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserConceptsInput, UserUpdateWithoutUserConceptsInput>, UserUncheckedUpdateWithoutUserConceptsInput>
  }

  export type BookCreateNestedOneWithoutBookConceptsInput = {
    create?: XOR<BookCreateWithoutBookConceptsInput, BookUncheckedCreateWithoutBookConceptsInput>
    connectOrCreate?: BookCreateOrConnectWithoutBookConceptsInput
    connect?: BookWhereUniqueInput
  }

  export type BookUpdateOneRequiredWithoutBookConceptsNestedInput = {
    create?: XOR<BookCreateWithoutBookConceptsInput, BookUncheckedCreateWithoutBookConceptsInput>
    connectOrCreate?: BookCreateOrConnectWithoutBookConceptsInput
    upsert?: BookUpsertWithoutBookConceptsInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutBookConceptsInput, BookUpdateWithoutBookConceptsInput>, BookUncheckedUpdateWithoutBookConceptsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumBookFileTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BookFileType | EnumBookFileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BookFileType[] | ListEnumBookFileTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookFileType[] | ListEnumBookFileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBookFileTypeFilter<$PrismaModel> | $Enums.BookFileType
  }

  export type NestedEnumBookFileTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookFileType | EnumBookFileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BookFileType[] | ListEnumBookFileTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookFileType[] | ListEnumBookFileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBookFileTypeWithAggregatesFilter<$PrismaModel> | $Enums.BookFileType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookFileTypeFilter<$PrismaModel>
    _max?: NestedEnumBookFileTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BookCreateWithoutUserInput = {
    id?: string
    title: string
    author?: string | null
    description?: string | null
    coverUrl?: string | null
    fileUrl?: string | null
    fileType: $Enums.BookFileType
    totalPages?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    chapters?: ChapterCreateNestedManyWithoutBookInput
    readingProgress?: ReadingProgressCreateNestedOneWithoutBookInput
    highlights?: HighlightCreateNestedManyWithoutBookInput
    notes?: NoteCreateNestedManyWithoutBookInput
    chunks?: ContentChunkCreateNestedManyWithoutBookInput
    bookConcepts?: BookConceptCreateNestedManyWithoutBookInput
    conversations?: ConversationCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    author?: string | null
    description?: string | null
    coverUrl?: string | null
    fileUrl?: string | null
    fileType: $Enums.BookFileType
    totalPages?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    chapters?: ChapterUncheckedCreateNestedManyWithoutBookInput
    readingProgress?: ReadingProgressUncheckedCreateNestedOneWithoutBookInput
    highlights?: HighlightUncheckedCreateNestedManyWithoutBookInput
    notes?: NoteUncheckedCreateNestedManyWithoutBookInput
    chunks?: ContentChunkUncheckedCreateNestedManyWithoutBookInput
    bookConcepts?: BookConceptUncheckedCreateNestedManyWithoutBookInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutUserInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput>
  }

  export type BookCreateManyUserInputEnvelope = {
    data: BookCreateManyUserInput | BookCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReadingProgressCreateWithoutUserInput = {
    id?: string
    currentPage?: number | null
    currentChapter?: number | null
    progress?: number
    lastReadAt?: Date | string
    book: BookCreateNestedOneWithoutReadingProgressInput
  }

  export type ReadingProgressUncheckedCreateWithoutUserInput = {
    id?: string
    currentPage?: number | null
    currentChapter?: number | null
    progress?: number
    lastReadAt?: Date | string
    bookId: string
  }

  export type ReadingProgressCreateOrConnectWithoutUserInput = {
    where: ReadingProgressWhereUniqueInput
    create: XOR<ReadingProgressCreateWithoutUserInput, ReadingProgressUncheckedCreateWithoutUserInput>
  }

  export type ReadingProgressCreateManyUserInputEnvelope = {
    data: ReadingProgressCreateManyUserInput | ReadingProgressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HighlightCreateWithoutUserInput = {
    id?: string
    text: string
    color?: string | null
    page?: number | null
    position?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    book: BookCreateNestedOneWithoutHighlightsInput
    note?: NoteCreateNestedOneWithoutHighlightInput
  }

  export type HighlightUncheckedCreateWithoutUserInput = {
    id?: string
    text: string
    color?: string | null
    page?: number | null
    position?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    bookId: string
    note?: NoteUncheckedCreateNestedOneWithoutHighlightInput
  }

  export type HighlightCreateOrConnectWithoutUserInput = {
    where: HighlightWhereUniqueInput
    create: XOR<HighlightCreateWithoutUserInput, HighlightUncheckedCreateWithoutUserInput>
  }

  export type HighlightCreateManyUserInputEnvelope = {
    data: HighlightCreateManyUserInput | HighlightCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NoteCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    book: BookCreateNestedOneWithoutNotesInput
    highlight?: HighlightCreateNestedOneWithoutNoteInput
  }

  export type NoteUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookId: string
    highlightId?: string | null
  }

  export type NoteCreateOrConnectWithoutUserInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput>
  }

  export type NoteCreateManyUserInputEnvelope = {
    data: NoteCreateManyUserInput | NoteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ConversationCreateWithoutUserInput = {
    id?: string
    book: BookCreateNestedOneWithoutConversationsInput
  }

  export type ConversationUncheckedCreateWithoutUserInput = {
    id?: string
    bookId: string
  }

  export type ConversationCreateOrConnectWithoutUserInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput>
  }

  export type ConversationCreateManyUserInputEnvelope = {
    data: ConversationCreateManyUserInput | ConversationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserConceptCreateWithoutUserInput = {
    id?: string
  }

  export type UserConceptUncheckedCreateWithoutUserInput = {
    id?: string
  }

  export type UserConceptCreateOrConnectWithoutUserInput = {
    where: UserConceptWhereUniqueInput
    create: XOR<UserConceptCreateWithoutUserInput, UserConceptUncheckedCreateWithoutUserInput>
  }

  export type UserConceptCreateManyUserInputEnvelope = {
    data: UserConceptCreateManyUserInput | UserConceptCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookUpsertWithWhereUniqueWithoutUserInput = {
    where: BookWhereUniqueInput
    update: XOR<BookUpdateWithoutUserInput, BookUncheckedUpdateWithoutUserInput>
    create: XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput>
  }

  export type BookUpdateWithWhereUniqueWithoutUserInput = {
    where: BookWhereUniqueInput
    data: XOR<BookUpdateWithoutUserInput, BookUncheckedUpdateWithoutUserInput>
  }

  export type BookUpdateManyWithWhereWithoutUserInput = {
    where: BookScalarWhereInput
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyWithoutUserInput>
  }

  export type BookScalarWhereInput = {
    AND?: BookScalarWhereInput | BookScalarWhereInput[]
    OR?: BookScalarWhereInput[]
    NOT?: BookScalarWhereInput | BookScalarWhereInput[]
    id?: StringFilter<"Book"> | string
    title?: StringFilter<"Book"> | string
    author?: StringNullableFilter<"Book"> | string | null
    description?: StringNullableFilter<"Book"> | string | null
    coverUrl?: StringNullableFilter<"Book"> | string | null
    fileUrl?: StringNullableFilter<"Book"> | string | null
    fileType?: EnumBookFileTypeFilter<"Book"> | $Enums.BookFileType
    totalPages?: IntNullableFilter<"Book"> | number | null
    metadata?: JsonNullableFilter<"Book">
    createdAt?: DateTimeFilter<"Book"> | Date | string
    updatedAt?: DateTimeFilter<"Book"> | Date | string
    userId?: StringFilter<"Book"> | string
  }

  export type ReadingProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: ReadingProgressWhereUniqueInput
    update: XOR<ReadingProgressUpdateWithoutUserInput, ReadingProgressUncheckedUpdateWithoutUserInput>
    create: XOR<ReadingProgressCreateWithoutUserInput, ReadingProgressUncheckedCreateWithoutUserInput>
  }

  export type ReadingProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: ReadingProgressWhereUniqueInput
    data: XOR<ReadingProgressUpdateWithoutUserInput, ReadingProgressUncheckedUpdateWithoutUserInput>
  }

  export type ReadingProgressUpdateManyWithWhereWithoutUserInput = {
    where: ReadingProgressScalarWhereInput
    data: XOR<ReadingProgressUpdateManyMutationInput, ReadingProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type ReadingProgressScalarWhereInput = {
    AND?: ReadingProgressScalarWhereInput | ReadingProgressScalarWhereInput[]
    OR?: ReadingProgressScalarWhereInput[]
    NOT?: ReadingProgressScalarWhereInput | ReadingProgressScalarWhereInput[]
    id?: StringFilter<"ReadingProgress"> | string
    currentPage?: IntNullableFilter<"ReadingProgress"> | number | null
    currentChapter?: IntNullableFilter<"ReadingProgress"> | number | null
    progress?: FloatFilter<"ReadingProgress"> | number
    lastReadAt?: DateTimeFilter<"ReadingProgress"> | Date | string
    userId?: StringFilter<"ReadingProgress"> | string
    bookId?: StringFilter<"ReadingProgress"> | string
  }

  export type HighlightUpsertWithWhereUniqueWithoutUserInput = {
    where: HighlightWhereUniqueInput
    update: XOR<HighlightUpdateWithoutUserInput, HighlightUncheckedUpdateWithoutUserInput>
    create: XOR<HighlightCreateWithoutUserInput, HighlightUncheckedCreateWithoutUserInput>
  }

  export type HighlightUpdateWithWhereUniqueWithoutUserInput = {
    where: HighlightWhereUniqueInput
    data: XOR<HighlightUpdateWithoutUserInput, HighlightUncheckedUpdateWithoutUserInput>
  }

  export type HighlightUpdateManyWithWhereWithoutUserInput = {
    where: HighlightScalarWhereInput
    data: XOR<HighlightUpdateManyMutationInput, HighlightUncheckedUpdateManyWithoutUserInput>
  }

  export type HighlightScalarWhereInput = {
    AND?: HighlightScalarWhereInput | HighlightScalarWhereInput[]
    OR?: HighlightScalarWhereInput[]
    NOT?: HighlightScalarWhereInput | HighlightScalarWhereInput[]
    id?: StringFilter<"Highlight"> | string
    text?: StringFilter<"Highlight"> | string
    color?: StringNullableFilter<"Highlight"> | string | null
    page?: IntNullableFilter<"Highlight"> | number | null
    position?: JsonNullableFilter<"Highlight">
    createdAt?: DateTimeFilter<"Highlight"> | Date | string
    userId?: StringFilter<"Highlight"> | string
    bookId?: StringFilter<"Highlight"> | string
  }

  export type NoteUpsertWithWhereUniqueWithoutUserInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutUserInput, NoteUncheckedUpdateWithoutUserInput>
    create: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutUserInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutUserInput, NoteUncheckedUpdateWithoutUserInput>
  }

  export type NoteUpdateManyWithWhereWithoutUserInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutUserInput>
  }

  export type NoteScalarWhereInput = {
    AND?: NoteScalarWhereInput | NoteScalarWhereInput[]
    OR?: NoteScalarWhereInput[]
    NOT?: NoteScalarWhereInput | NoteScalarWhereInput[]
    id?: StringFilter<"Note"> | string
    content?: StringFilter<"Note"> | string
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
    userId?: StringFilter<"Note"> | string
    bookId?: StringFilter<"Note"> | string
    highlightId?: StringNullableFilter<"Note"> | string | null
  }

  export type ConversationUpsertWithWhereUniqueWithoutUserInput = {
    where: ConversationWhereUniqueInput
    update: XOR<ConversationUpdateWithoutUserInput, ConversationUncheckedUpdateWithoutUserInput>
    create: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput>
  }

  export type ConversationUpdateWithWhereUniqueWithoutUserInput = {
    where: ConversationWhereUniqueInput
    data: XOR<ConversationUpdateWithoutUserInput, ConversationUncheckedUpdateWithoutUserInput>
  }

  export type ConversationUpdateManyWithWhereWithoutUserInput = {
    where: ConversationScalarWhereInput
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyWithoutUserInput>
  }

  export type ConversationScalarWhereInput = {
    AND?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
    OR?: ConversationScalarWhereInput[]
    NOT?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
    id?: StringFilter<"Conversation"> | string
    userId?: StringFilter<"Conversation"> | string
    bookId?: StringFilter<"Conversation"> | string
  }

  export type UserConceptUpsertWithWhereUniqueWithoutUserInput = {
    where: UserConceptWhereUniqueInput
    update: XOR<UserConceptUpdateWithoutUserInput, UserConceptUncheckedUpdateWithoutUserInput>
    create: XOR<UserConceptCreateWithoutUserInput, UserConceptUncheckedCreateWithoutUserInput>
  }

  export type UserConceptUpdateWithWhereUniqueWithoutUserInput = {
    where: UserConceptWhereUniqueInput
    data: XOR<UserConceptUpdateWithoutUserInput, UserConceptUncheckedUpdateWithoutUserInput>
  }

  export type UserConceptUpdateManyWithWhereWithoutUserInput = {
    where: UserConceptScalarWhereInput
    data: XOR<UserConceptUpdateManyMutationInput, UserConceptUncheckedUpdateManyWithoutUserInput>
  }

  export type UserConceptScalarWhereInput = {
    AND?: UserConceptScalarWhereInput | UserConceptScalarWhereInput[]
    OR?: UserConceptScalarWhereInput[]
    NOT?: UserConceptScalarWhereInput | UserConceptScalarWhereInput[]
    id?: StringFilter<"UserConcept"> | string
    userId?: StringFilter<"UserConcept"> | string
  }

  export type UserCreateWithoutBooksInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    readingProgress?: ReadingProgressCreateNestedManyWithoutUserInput
    highlights?: HighlightCreateNestedManyWithoutUserInput
    notes?: NoteCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUserInput
    userConcepts?: UserConceptCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBooksInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    readingProgress?: ReadingProgressUncheckedCreateNestedManyWithoutUserInput
    highlights?: HighlightUncheckedCreateNestedManyWithoutUserInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUserInput
    userConcepts?: UserConceptUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBooksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBooksInput, UserUncheckedCreateWithoutBooksInput>
  }

  export type ChapterCreateWithoutBookInput = {
    id?: string
    title: string
    chapterNo: number
    startPage?: number | null
    endPage?: number | null
    sections?: SectionCreateNestedManyWithoutChapterInput
  }

  export type ChapterUncheckedCreateWithoutBookInput = {
    id?: string
    title: string
    chapterNo: number
    startPage?: number | null
    endPage?: number | null
    sections?: SectionUncheckedCreateNestedManyWithoutChapterInput
  }

  export type ChapterCreateOrConnectWithoutBookInput = {
    where: ChapterWhereUniqueInput
    create: XOR<ChapterCreateWithoutBookInput, ChapterUncheckedCreateWithoutBookInput>
  }

  export type ChapterCreateManyBookInputEnvelope = {
    data: ChapterCreateManyBookInput | ChapterCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type ReadingProgressCreateWithoutBookInput = {
    id?: string
    currentPage?: number | null
    currentChapter?: number | null
    progress?: number
    lastReadAt?: Date | string
    user: UserCreateNestedOneWithoutReadingProgressInput
  }

  export type ReadingProgressUncheckedCreateWithoutBookInput = {
    id?: string
    currentPage?: number | null
    currentChapter?: number | null
    progress?: number
    lastReadAt?: Date | string
    userId: string
  }

  export type ReadingProgressCreateOrConnectWithoutBookInput = {
    where: ReadingProgressWhereUniqueInput
    create: XOR<ReadingProgressCreateWithoutBookInput, ReadingProgressUncheckedCreateWithoutBookInput>
  }

  export type HighlightCreateWithoutBookInput = {
    id?: string
    text: string
    color?: string | null
    page?: number | null
    position?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutHighlightsInput
    note?: NoteCreateNestedOneWithoutHighlightInput
  }

  export type HighlightUncheckedCreateWithoutBookInput = {
    id?: string
    text: string
    color?: string | null
    page?: number | null
    position?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    userId: string
    note?: NoteUncheckedCreateNestedOneWithoutHighlightInput
  }

  export type HighlightCreateOrConnectWithoutBookInput = {
    where: HighlightWhereUniqueInput
    create: XOR<HighlightCreateWithoutBookInput, HighlightUncheckedCreateWithoutBookInput>
  }

  export type HighlightCreateManyBookInputEnvelope = {
    data: HighlightCreateManyBookInput | HighlightCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type NoteCreateWithoutBookInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutNotesInput
    highlight?: HighlightCreateNestedOneWithoutNoteInput
  }

  export type NoteUncheckedCreateWithoutBookInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    highlightId?: string | null
  }

  export type NoteCreateOrConnectWithoutBookInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutBookInput, NoteUncheckedCreateWithoutBookInput>
  }

  export type NoteCreateManyBookInputEnvelope = {
    data: NoteCreateManyBookInput | NoteCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type ContentChunkCreateWithoutBookInput = {
    id?: string
    content: string
    chunkNo: number
    pageStart?: number | null
    pageEnd?: number | null
    section?: SectionCreateNestedOneWithoutChunksInput
  }

  export type ContentChunkUncheckedCreateWithoutBookInput = {
    id?: string
    content: string
    chunkNo: number
    pageStart?: number | null
    pageEnd?: number | null
    sectionId?: string | null
  }

  export type ContentChunkCreateOrConnectWithoutBookInput = {
    where: ContentChunkWhereUniqueInput
    create: XOR<ContentChunkCreateWithoutBookInput, ContentChunkUncheckedCreateWithoutBookInput>
  }

  export type ContentChunkCreateManyBookInputEnvelope = {
    data: ContentChunkCreateManyBookInput | ContentChunkCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type BookConceptCreateWithoutBookInput = {
    id?: string
  }

  export type BookConceptUncheckedCreateWithoutBookInput = {
    id?: string
  }

  export type BookConceptCreateOrConnectWithoutBookInput = {
    where: BookConceptWhereUniqueInput
    create: XOR<BookConceptCreateWithoutBookInput, BookConceptUncheckedCreateWithoutBookInput>
  }

  export type BookConceptCreateManyBookInputEnvelope = {
    data: BookConceptCreateManyBookInput | BookConceptCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type ConversationCreateWithoutBookInput = {
    id?: string
    user: UserCreateNestedOneWithoutConversationsInput
  }

  export type ConversationUncheckedCreateWithoutBookInput = {
    id?: string
    userId: string
  }

  export type ConversationCreateOrConnectWithoutBookInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutBookInput, ConversationUncheckedCreateWithoutBookInput>
  }

  export type ConversationCreateManyBookInputEnvelope = {
    data: ConversationCreateManyBookInput | ConversationCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBooksInput = {
    update: XOR<UserUpdateWithoutBooksInput, UserUncheckedUpdateWithoutBooksInput>
    create: XOR<UserCreateWithoutBooksInput, UserUncheckedCreateWithoutBooksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBooksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBooksInput, UserUncheckedUpdateWithoutBooksInput>
  }

  export type UserUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readingProgress?: ReadingProgressUpdateManyWithoutUserNestedInput
    highlights?: HighlightUpdateManyWithoutUserNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUserNestedInput
    userConcepts?: UserConceptUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readingProgress?: ReadingProgressUncheckedUpdateManyWithoutUserNestedInput
    highlights?: HighlightUncheckedUpdateManyWithoutUserNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUserNestedInput
    userConcepts?: UserConceptUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChapterUpsertWithWhereUniqueWithoutBookInput = {
    where: ChapterWhereUniqueInput
    update: XOR<ChapterUpdateWithoutBookInput, ChapterUncheckedUpdateWithoutBookInput>
    create: XOR<ChapterCreateWithoutBookInput, ChapterUncheckedCreateWithoutBookInput>
  }

  export type ChapterUpdateWithWhereUniqueWithoutBookInput = {
    where: ChapterWhereUniqueInput
    data: XOR<ChapterUpdateWithoutBookInput, ChapterUncheckedUpdateWithoutBookInput>
  }

  export type ChapterUpdateManyWithWhereWithoutBookInput = {
    where: ChapterScalarWhereInput
    data: XOR<ChapterUpdateManyMutationInput, ChapterUncheckedUpdateManyWithoutBookInput>
  }

  export type ChapterScalarWhereInput = {
    AND?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
    OR?: ChapterScalarWhereInput[]
    NOT?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
    id?: StringFilter<"Chapter"> | string
    title?: StringFilter<"Chapter"> | string
    chapterNo?: IntFilter<"Chapter"> | number
    startPage?: IntNullableFilter<"Chapter"> | number | null
    endPage?: IntNullableFilter<"Chapter"> | number | null
    bookId?: StringFilter<"Chapter"> | string
  }

  export type ReadingProgressUpsertWithoutBookInput = {
    update: XOR<ReadingProgressUpdateWithoutBookInput, ReadingProgressUncheckedUpdateWithoutBookInput>
    create: XOR<ReadingProgressCreateWithoutBookInput, ReadingProgressUncheckedCreateWithoutBookInput>
    where?: ReadingProgressWhereInput
  }

  export type ReadingProgressUpdateToOneWithWhereWithoutBookInput = {
    where?: ReadingProgressWhereInput
    data: XOR<ReadingProgressUpdateWithoutBookInput, ReadingProgressUncheckedUpdateWithoutBookInput>
  }

  export type ReadingProgressUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentPage?: NullableIntFieldUpdateOperationsInput | number | null
    currentChapter?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: FloatFieldUpdateOperationsInput | number
    lastReadAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReadingProgressNestedInput
  }

  export type ReadingProgressUncheckedUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentPage?: NullableIntFieldUpdateOperationsInput | number | null
    currentChapter?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: FloatFieldUpdateOperationsInput | number
    lastReadAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type HighlightUpsertWithWhereUniqueWithoutBookInput = {
    where: HighlightWhereUniqueInput
    update: XOR<HighlightUpdateWithoutBookInput, HighlightUncheckedUpdateWithoutBookInput>
    create: XOR<HighlightCreateWithoutBookInput, HighlightUncheckedCreateWithoutBookInput>
  }

  export type HighlightUpdateWithWhereUniqueWithoutBookInput = {
    where: HighlightWhereUniqueInput
    data: XOR<HighlightUpdateWithoutBookInput, HighlightUncheckedUpdateWithoutBookInput>
  }

  export type HighlightUpdateManyWithWhereWithoutBookInput = {
    where: HighlightScalarWhereInput
    data: XOR<HighlightUpdateManyMutationInput, HighlightUncheckedUpdateManyWithoutBookInput>
  }

  export type NoteUpsertWithWhereUniqueWithoutBookInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutBookInput, NoteUncheckedUpdateWithoutBookInput>
    create: XOR<NoteCreateWithoutBookInput, NoteUncheckedCreateWithoutBookInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutBookInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutBookInput, NoteUncheckedUpdateWithoutBookInput>
  }

  export type NoteUpdateManyWithWhereWithoutBookInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutBookInput>
  }

  export type ContentChunkUpsertWithWhereUniqueWithoutBookInput = {
    where: ContentChunkWhereUniqueInput
    update: XOR<ContentChunkUpdateWithoutBookInput, ContentChunkUncheckedUpdateWithoutBookInput>
    create: XOR<ContentChunkCreateWithoutBookInput, ContentChunkUncheckedCreateWithoutBookInput>
  }

  export type ContentChunkUpdateWithWhereUniqueWithoutBookInput = {
    where: ContentChunkWhereUniqueInput
    data: XOR<ContentChunkUpdateWithoutBookInput, ContentChunkUncheckedUpdateWithoutBookInput>
  }

  export type ContentChunkUpdateManyWithWhereWithoutBookInput = {
    where: ContentChunkScalarWhereInput
    data: XOR<ContentChunkUpdateManyMutationInput, ContentChunkUncheckedUpdateManyWithoutBookInput>
  }

  export type ContentChunkScalarWhereInput = {
    AND?: ContentChunkScalarWhereInput | ContentChunkScalarWhereInput[]
    OR?: ContentChunkScalarWhereInput[]
    NOT?: ContentChunkScalarWhereInput | ContentChunkScalarWhereInput[]
    id?: StringFilter<"ContentChunk"> | string
    content?: StringFilter<"ContentChunk"> | string
    chunkNo?: IntFilter<"ContentChunk"> | number
    pageStart?: IntNullableFilter<"ContentChunk"> | number | null
    pageEnd?: IntNullableFilter<"ContentChunk"> | number | null
    bookId?: StringFilter<"ContentChunk"> | string
    sectionId?: StringNullableFilter<"ContentChunk"> | string | null
  }

  export type BookConceptUpsertWithWhereUniqueWithoutBookInput = {
    where: BookConceptWhereUniqueInput
    update: XOR<BookConceptUpdateWithoutBookInput, BookConceptUncheckedUpdateWithoutBookInput>
    create: XOR<BookConceptCreateWithoutBookInput, BookConceptUncheckedCreateWithoutBookInput>
  }

  export type BookConceptUpdateWithWhereUniqueWithoutBookInput = {
    where: BookConceptWhereUniqueInput
    data: XOR<BookConceptUpdateWithoutBookInput, BookConceptUncheckedUpdateWithoutBookInput>
  }

  export type BookConceptUpdateManyWithWhereWithoutBookInput = {
    where: BookConceptScalarWhereInput
    data: XOR<BookConceptUpdateManyMutationInput, BookConceptUncheckedUpdateManyWithoutBookInput>
  }

  export type BookConceptScalarWhereInput = {
    AND?: BookConceptScalarWhereInput | BookConceptScalarWhereInput[]
    OR?: BookConceptScalarWhereInput[]
    NOT?: BookConceptScalarWhereInput | BookConceptScalarWhereInput[]
    id?: StringFilter<"BookConcept"> | string
    bookId?: StringFilter<"BookConcept"> | string
  }

  export type ConversationUpsertWithWhereUniqueWithoutBookInput = {
    where: ConversationWhereUniqueInput
    update: XOR<ConversationUpdateWithoutBookInput, ConversationUncheckedUpdateWithoutBookInput>
    create: XOR<ConversationCreateWithoutBookInput, ConversationUncheckedCreateWithoutBookInput>
  }

  export type ConversationUpdateWithWhereUniqueWithoutBookInput = {
    where: ConversationWhereUniqueInput
    data: XOR<ConversationUpdateWithoutBookInput, ConversationUncheckedUpdateWithoutBookInput>
  }

  export type ConversationUpdateManyWithWhereWithoutBookInput = {
    where: ConversationScalarWhereInput
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyWithoutBookInput>
  }

  export type BookCreateWithoutChaptersInput = {
    id?: string
    title: string
    author?: string | null
    description?: string | null
    coverUrl?: string | null
    fileUrl?: string | null
    fileType: $Enums.BookFileType
    totalPages?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBooksInput
    readingProgress?: ReadingProgressCreateNestedOneWithoutBookInput
    highlights?: HighlightCreateNestedManyWithoutBookInput
    notes?: NoteCreateNestedManyWithoutBookInput
    chunks?: ContentChunkCreateNestedManyWithoutBookInput
    bookConcepts?: BookConceptCreateNestedManyWithoutBookInput
    conversations?: ConversationCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutChaptersInput = {
    id?: string
    title: string
    author?: string | null
    description?: string | null
    coverUrl?: string | null
    fileUrl?: string | null
    fileType: $Enums.BookFileType
    totalPages?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    readingProgress?: ReadingProgressUncheckedCreateNestedOneWithoutBookInput
    highlights?: HighlightUncheckedCreateNestedManyWithoutBookInput
    notes?: NoteUncheckedCreateNestedManyWithoutBookInput
    chunks?: ContentChunkUncheckedCreateNestedManyWithoutBookInput
    bookConcepts?: BookConceptUncheckedCreateNestedManyWithoutBookInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutChaptersInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutChaptersInput, BookUncheckedCreateWithoutChaptersInput>
  }

  export type SectionCreateWithoutChapterInput = {
    id?: string
    title?: string | null
    sectionNo: number
    content?: string | null
    chunks?: ContentChunkCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutChapterInput = {
    id?: string
    title?: string | null
    sectionNo: number
    content?: string | null
    chunks?: ContentChunkUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutChapterInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutChapterInput, SectionUncheckedCreateWithoutChapterInput>
  }

  export type SectionCreateManyChapterInputEnvelope = {
    data: SectionCreateManyChapterInput | SectionCreateManyChapterInput[]
    skipDuplicates?: boolean
  }

  export type BookUpsertWithoutChaptersInput = {
    update: XOR<BookUpdateWithoutChaptersInput, BookUncheckedUpdateWithoutChaptersInput>
    create: XOR<BookCreateWithoutChaptersInput, BookUncheckedCreateWithoutChaptersInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutChaptersInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutChaptersInput, BookUncheckedUpdateWithoutChaptersInput>
  }

  export type BookUpdateWithoutChaptersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: EnumBookFileTypeFieldUpdateOperationsInput | $Enums.BookFileType
    totalPages?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBooksNestedInput
    readingProgress?: ReadingProgressUpdateOneWithoutBookNestedInput
    highlights?: HighlightUpdateManyWithoutBookNestedInput
    notes?: NoteUpdateManyWithoutBookNestedInput
    chunks?: ContentChunkUpdateManyWithoutBookNestedInput
    bookConcepts?: BookConceptUpdateManyWithoutBookNestedInput
    conversations?: ConversationUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutChaptersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: EnumBookFileTypeFieldUpdateOperationsInput | $Enums.BookFileType
    totalPages?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    readingProgress?: ReadingProgressUncheckedUpdateOneWithoutBookNestedInput
    highlights?: HighlightUncheckedUpdateManyWithoutBookNestedInput
    notes?: NoteUncheckedUpdateManyWithoutBookNestedInput
    chunks?: ContentChunkUncheckedUpdateManyWithoutBookNestedInput
    bookConcepts?: BookConceptUncheckedUpdateManyWithoutBookNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutBookNestedInput
  }

  export type SectionUpsertWithWhereUniqueWithoutChapterInput = {
    where: SectionWhereUniqueInput
    update: XOR<SectionUpdateWithoutChapterInput, SectionUncheckedUpdateWithoutChapterInput>
    create: XOR<SectionCreateWithoutChapterInput, SectionUncheckedCreateWithoutChapterInput>
  }

  export type SectionUpdateWithWhereUniqueWithoutChapterInput = {
    where: SectionWhereUniqueInput
    data: XOR<SectionUpdateWithoutChapterInput, SectionUncheckedUpdateWithoutChapterInput>
  }

  export type SectionUpdateManyWithWhereWithoutChapterInput = {
    where: SectionScalarWhereInput
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyWithoutChapterInput>
  }

  export type SectionScalarWhereInput = {
    AND?: SectionScalarWhereInput | SectionScalarWhereInput[]
    OR?: SectionScalarWhereInput[]
    NOT?: SectionScalarWhereInput | SectionScalarWhereInput[]
    id?: StringFilter<"Section"> | string
    title?: StringNullableFilter<"Section"> | string | null
    sectionNo?: IntFilter<"Section"> | number
    content?: StringNullableFilter<"Section"> | string | null
    chapterId?: StringFilter<"Section"> | string
  }

  export type ChapterCreateWithoutSectionsInput = {
    id?: string
    title: string
    chapterNo: number
    startPage?: number | null
    endPage?: number | null
    book: BookCreateNestedOneWithoutChaptersInput
  }

  export type ChapterUncheckedCreateWithoutSectionsInput = {
    id?: string
    title: string
    chapterNo: number
    startPage?: number | null
    endPage?: number | null
    bookId: string
  }

  export type ChapterCreateOrConnectWithoutSectionsInput = {
    where: ChapterWhereUniqueInput
    create: XOR<ChapterCreateWithoutSectionsInput, ChapterUncheckedCreateWithoutSectionsInput>
  }

  export type ContentChunkCreateWithoutSectionInput = {
    id?: string
    content: string
    chunkNo: number
    pageStart?: number | null
    pageEnd?: number | null
    book: BookCreateNestedOneWithoutChunksInput
  }

  export type ContentChunkUncheckedCreateWithoutSectionInput = {
    id?: string
    content: string
    chunkNo: number
    pageStart?: number | null
    pageEnd?: number | null
    bookId: string
  }

  export type ContentChunkCreateOrConnectWithoutSectionInput = {
    where: ContentChunkWhereUniqueInput
    create: XOR<ContentChunkCreateWithoutSectionInput, ContentChunkUncheckedCreateWithoutSectionInput>
  }

  export type ContentChunkCreateManySectionInputEnvelope = {
    data: ContentChunkCreateManySectionInput | ContentChunkCreateManySectionInput[]
    skipDuplicates?: boolean
  }

  export type ChapterUpsertWithoutSectionsInput = {
    update: XOR<ChapterUpdateWithoutSectionsInput, ChapterUncheckedUpdateWithoutSectionsInput>
    create: XOR<ChapterCreateWithoutSectionsInput, ChapterUncheckedCreateWithoutSectionsInput>
    where?: ChapterWhereInput
  }

  export type ChapterUpdateToOneWithWhereWithoutSectionsInput = {
    where?: ChapterWhereInput
    data: XOR<ChapterUpdateWithoutSectionsInput, ChapterUncheckedUpdateWithoutSectionsInput>
  }

  export type ChapterUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    chapterNo?: IntFieldUpdateOperationsInput | number
    startPage?: NullableIntFieldUpdateOperationsInput | number | null
    endPage?: NullableIntFieldUpdateOperationsInput | number | null
    book?: BookUpdateOneRequiredWithoutChaptersNestedInput
  }

  export type ChapterUncheckedUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    chapterNo?: IntFieldUpdateOperationsInput | number
    startPage?: NullableIntFieldUpdateOperationsInput | number | null
    endPage?: NullableIntFieldUpdateOperationsInput | number | null
    bookId?: StringFieldUpdateOperationsInput | string
  }

  export type ContentChunkUpsertWithWhereUniqueWithoutSectionInput = {
    where: ContentChunkWhereUniqueInput
    update: XOR<ContentChunkUpdateWithoutSectionInput, ContentChunkUncheckedUpdateWithoutSectionInput>
    create: XOR<ContentChunkCreateWithoutSectionInput, ContentChunkUncheckedCreateWithoutSectionInput>
  }

  export type ContentChunkUpdateWithWhereUniqueWithoutSectionInput = {
    where: ContentChunkWhereUniqueInput
    data: XOR<ContentChunkUpdateWithoutSectionInput, ContentChunkUncheckedUpdateWithoutSectionInput>
  }

  export type ContentChunkUpdateManyWithWhereWithoutSectionInput = {
    where: ContentChunkScalarWhereInput
    data: XOR<ContentChunkUpdateManyMutationInput, ContentChunkUncheckedUpdateManyWithoutSectionInput>
  }

  export type BookCreateWithoutChunksInput = {
    id?: string
    title: string
    author?: string | null
    description?: string | null
    coverUrl?: string | null
    fileUrl?: string | null
    fileType: $Enums.BookFileType
    totalPages?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBooksInput
    chapters?: ChapterCreateNestedManyWithoutBookInput
    readingProgress?: ReadingProgressCreateNestedOneWithoutBookInput
    highlights?: HighlightCreateNestedManyWithoutBookInput
    notes?: NoteCreateNestedManyWithoutBookInput
    bookConcepts?: BookConceptCreateNestedManyWithoutBookInput
    conversations?: ConversationCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutChunksInput = {
    id?: string
    title: string
    author?: string | null
    description?: string | null
    coverUrl?: string | null
    fileUrl?: string | null
    fileType: $Enums.BookFileType
    totalPages?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    chapters?: ChapterUncheckedCreateNestedManyWithoutBookInput
    readingProgress?: ReadingProgressUncheckedCreateNestedOneWithoutBookInput
    highlights?: HighlightUncheckedCreateNestedManyWithoutBookInput
    notes?: NoteUncheckedCreateNestedManyWithoutBookInput
    bookConcepts?: BookConceptUncheckedCreateNestedManyWithoutBookInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutChunksInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutChunksInput, BookUncheckedCreateWithoutChunksInput>
  }

  export type SectionCreateWithoutChunksInput = {
    id?: string
    title?: string | null
    sectionNo: number
    content?: string | null
    chapter: ChapterCreateNestedOneWithoutSectionsInput
  }

  export type SectionUncheckedCreateWithoutChunksInput = {
    id?: string
    title?: string | null
    sectionNo: number
    content?: string | null
    chapterId: string
  }

  export type SectionCreateOrConnectWithoutChunksInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutChunksInput, SectionUncheckedCreateWithoutChunksInput>
  }

  export type BookUpsertWithoutChunksInput = {
    update: XOR<BookUpdateWithoutChunksInput, BookUncheckedUpdateWithoutChunksInput>
    create: XOR<BookCreateWithoutChunksInput, BookUncheckedCreateWithoutChunksInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutChunksInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutChunksInput, BookUncheckedUpdateWithoutChunksInput>
  }

  export type BookUpdateWithoutChunksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: EnumBookFileTypeFieldUpdateOperationsInput | $Enums.BookFileType
    totalPages?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBooksNestedInput
    chapters?: ChapterUpdateManyWithoutBookNestedInput
    readingProgress?: ReadingProgressUpdateOneWithoutBookNestedInput
    highlights?: HighlightUpdateManyWithoutBookNestedInput
    notes?: NoteUpdateManyWithoutBookNestedInput
    bookConcepts?: BookConceptUpdateManyWithoutBookNestedInput
    conversations?: ConversationUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutChunksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: EnumBookFileTypeFieldUpdateOperationsInput | $Enums.BookFileType
    totalPages?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    chapters?: ChapterUncheckedUpdateManyWithoutBookNestedInput
    readingProgress?: ReadingProgressUncheckedUpdateOneWithoutBookNestedInput
    highlights?: HighlightUncheckedUpdateManyWithoutBookNestedInput
    notes?: NoteUncheckedUpdateManyWithoutBookNestedInput
    bookConcepts?: BookConceptUncheckedUpdateManyWithoutBookNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutBookNestedInput
  }

  export type SectionUpsertWithoutChunksInput = {
    update: XOR<SectionUpdateWithoutChunksInput, SectionUncheckedUpdateWithoutChunksInput>
    create: XOR<SectionCreateWithoutChunksInput, SectionUncheckedCreateWithoutChunksInput>
    where?: SectionWhereInput
  }

  export type SectionUpdateToOneWithWhereWithoutChunksInput = {
    where?: SectionWhereInput
    data: XOR<SectionUpdateWithoutChunksInput, SectionUncheckedUpdateWithoutChunksInput>
  }

  export type SectionUpdateWithoutChunksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    sectionNo?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    chapter?: ChapterUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type SectionUncheckedUpdateWithoutChunksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    sectionNo?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    chapterId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutReadingProgressInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookCreateNestedManyWithoutUserInput
    highlights?: HighlightCreateNestedManyWithoutUserInput
    notes?: NoteCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUserInput
    userConcepts?: UserConceptCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReadingProgressInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookUncheckedCreateNestedManyWithoutUserInput
    highlights?: HighlightUncheckedCreateNestedManyWithoutUserInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUserInput
    userConcepts?: UserConceptUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReadingProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReadingProgressInput, UserUncheckedCreateWithoutReadingProgressInput>
  }

  export type BookCreateWithoutReadingProgressInput = {
    id?: string
    title: string
    author?: string | null
    description?: string | null
    coverUrl?: string | null
    fileUrl?: string | null
    fileType: $Enums.BookFileType
    totalPages?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBooksInput
    chapters?: ChapterCreateNestedManyWithoutBookInput
    highlights?: HighlightCreateNestedManyWithoutBookInput
    notes?: NoteCreateNestedManyWithoutBookInput
    chunks?: ContentChunkCreateNestedManyWithoutBookInput
    bookConcepts?: BookConceptCreateNestedManyWithoutBookInput
    conversations?: ConversationCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutReadingProgressInput = {
    id?: string
    title: string
    author?: string | null
    description?: string | null
    coverUrl?: string | null
    fileUrl?: string | null
    fileType: $Enums.BookFileType
    totalPages?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    chapters?: ChapterUncheckedCreateNestedManyWithoutBookInput
    highlights?: HighlightUncheckedCreateNestedManyWithoutBookInput
    notes?: NoteUncheckedCreateNestedManyWithoutBookInput
    chunks?: ContentChunkUncheckedCreateNestedManyWithoutBookInput
    bookConcepts?: BookConceptUncheckedCreateNestedManyWithoutBookInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutReadingProgressInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutReadingProgressInput, BookUncheckedCreateWithoutReadingProgressInput>
  }

  export type UserUpsertWithoutReadingProgressInput = {
    update: XOR<UserUpdateWithoutReadingProgressInput, UserUncheckedUpdateWithoutReadingProgressInput>
    create: XOR<UserCreateWithoutReadingProgressInput, UserUncheckedCreateWithoutReadingProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReadingProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReadingProgressInput, UserUncheckedUpdateWithoutReadingProgressInput>
  }

  export type UserUpdateWithoutReadingProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUpdateManyWithoutUserNestedInput
    highlights?: HighlightUpdateManyWithoutUserNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUserNestedInput
    userConcepts?: UserConceptUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReadingProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUncheckedUpdateManyWithoutUserNestedInput
    highlights?: HighlightUncheckedUpdateManyWithoutUserNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUserNestedInput
    userConcepts?: UserConceptUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookUpsertWithoutReadingProgressInput = {
    update: XOR<BookUpdateWithoutReadingProgressInput, BookUncheckedUpdateWithoutReadingProgressInput>
    create: XOR<BookCreateWithoutReadingProgressInput, BookUncheckedCreateWithoutReadingProgressInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutReadingProgressInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutReadingProgressInput, BookUncheckedUpdateWithoutReadingProgressInput>
  }

  export type BookUpdateWithoutReadingProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: EnumBookFileTypeFieldUpdateOperationsInput | $Enums.BookFileType
    totalPages?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBooksNestedInput
    chapters?: ChapterUpdateManyWithoutBookNestedInput
    highlights?: HighlightUpdateManyWithoutBookNestedInput
    notes?: NoteUpdateManyWithoutBookNestedInput
    chunks?: ContentChunkUpdateManyWithoutBookNestedInput
    bookConcepts?: BookConceptUpdateManyWithoutBookNestedInput
    conversations?: ConversationUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutReadingProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: EnumBookFileTypeFieldUpdateOperationsInput | $Enums.BookFileType
    totalPages?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    chapters?: ChapterUncheckedUpdateManyWithoutBookNestedInput
    highlights?: HighlightUncheckedUpdateManyWithoutBookNestedInput
    notes?: NoteUncheckedUpdateManyWithoutBookNestedInput
    chunks?: ContentChunkUncheckedUpdateManyWithoutBookNestedInput
    bookConcepts?: BookConceptUncheckedUpdateManyWithoutBookNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutBookNestedInput
  }

  export type UserCreateWithoutHighlightsInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookCreateNestedManyWithoutUserInput
    readingProgress?: ReadingProgressCreateNestedManyWithoutUserInput
    notes?: NoteCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUserInput
    userConcepts?: UserConceptCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHighlightsInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookUncheckedCreateNestedManyWithoutUserInput
    readingProgress?: ReadingProgressUncheckedCreateNestedManyWithoutUserInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUserInput
    userConcepts?: UserConceptUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHighlightsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHighlightsInput, UserUncheckedCreateWithoutHighlightsInput>
  }

  export type BookCreateWithoutHighlightsInput = {
    id?: string
    title: string
    author?: string | null
    description?: string | null
    coverUrl?: string | null
    fileUrl?: string | null
    fileType: $Enums.BookFileType
    totalPages?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBooksInput
    chapters?: ChapterCreateNestedManyWithoutBookInput
    readingProgress?: ReadingProgressCreateNestedOneWithoutBookInput
    notes?: NoteCreateNestedManyWithoutBookInput
    chunks?: ContentChunkCreateNestedManyWithoutBookInput
    bookConcepts?: BookConceptCreateNestedManyWithoutBookInput
    conversations?: ConversationCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutHighlightsInput = {
    id?: string
    title: string
    author?: string | null
    description?: string | null
    coverUrl?: string | null
    fileUrl?: string | null
    fileType: $Enums.BookFileType
    totalPages?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    chapters?: ChapterUncheckedCreateNestedManyWithoutBookInput
    readingProgress?: ReadingProgressUncheckedCreateNestedOneWithoutBookInput
    notes?: NoteUncheckedCreateNestedManyWithoutBookInput
    chunks?: ContentChunkUncheckedCreateNestedManyWithoutBookInput
    bookConcepts?: BookConceptUncheckedCreateNestedManyWithoutBookInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutHighlightsInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutHighlightsInput, BookUncheckedCreateWithoutHighlightsInput>
  }

  export type NoteCreateWithoutHighlightInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutNotesInput
    book: BookCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateWithoutHighlightInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    bookId: string
  }

  export type NoteCreateOrConnectWithoutHighlightInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutHighlightInput, NoteUncheckedCreateWithoutHighlightInput>
  }

  export type UserUpsertWithoutHighlightsInput = {
    update: XOR<UserUpdateWithoutHighlightsInput, UserUncheckedUpdateWithoutHighlightsInput>
    create: XOR<UserCreateWithoutHighlightsInput, UserUncheckedCreateWithoutHighlightsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHighlightsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHighlightsInput, UserUncheckedUpdateWithoutHighlightsInput>
  }

  export type UserUpdateWithoutHighlightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUpdateManyWithoutUserNestedInput
    readingProgress?: ReadingProgressUpdateManyWithoutUserNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUserNestedInput
    userConcepts?: UserConceptUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHighlightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUncheckedUpdateManyWithoutUserNestedInput
    readingProgress?: ReadingProgressUncheckedUpdateManyWithoutUserNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUserNestedInput
    userConcepts?: UserConceptUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookUpsertWithoutHighlightsInput = {
    update: XOR<BookUpdateWithoutHighlightsInput, BookUncheckedUpdateWithoutHighlightsInput>
    create: XOR<BookCreateWithoutHighlightsInput, BookUncheckedCreateWithoutHighlightsInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutHighlightsInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutHighlightsInput, BookUncheckedUpdateWithoutHighlightsInput>
  }

  export type BookUpdateWithoutHighlightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: EnumBookFileTypeFieldUpdateOperationsInput | $Enums.BookFileType
    totalPages?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBooksNestedInput
    chapters?: ChapterUpdateManyWithoutBookNestedInput
    readingProgress?: ReadingProgressUpdateOneWithoutBookNestedInput
    notes?: NoteUpdateManyWithoutBookNestedInput
    chunks?: ContentChunkUpdateManyWithoutBookNestedInput
    bookConcepts?: BookConceptUpdateManyWithoutBookNestedInput
    conversations?: ConversationUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutHighlightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: EnumBookFileTypeFieldUpdateOperationsInput | $Enums.BookFileType
    totalPages?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    chapters?: ChapterUncheckedUpdateManyWithoutBookNestedInput
    readingProgress?: ReadingProgressUncheckedUpdateOneWithoutBookNestedInput
    notes?: NoteUncheckedUpdateManyWithoutBookNestedInput
    chunks?: ContentChunkUncheckedUpdateManyWithoutBookNestedInput
    bookConcepts?: BookConceptUncheckedUpdateManyWithoutBookNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutBookNestedInput
  }

  export type NoteUpsertWithoutHighlightInput = {
    update: XOR<NoteUpdateWithoutHighlightInput, NoteUncheckedUpdateWithoutHighlightInput>
    create: XOR<NoteCreateWithoutHighlightInput, NoteUncheckedCreateWithoutHighlightInput>
    where?: NoteWhereInput
  }

  export type NoteUpdateToOneWithWhereWithoutHighlightInput = {
    where?: NoteWhereInput
    data: XOR<NoteUpdateWithoutHighlightInput, NoteUncheckedUpdateWithoutHighlightInput>
  }

  export type NoteUpdateWithoutHighlightInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotesNestedInput
    book?: BookUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateWithoutHighlightInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutNotesInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookCreateNestedManyWithoutUserInput
    readingProgress?: ReadingProgressCreateNestedManyWithoutUserInput
    highlights?: HighlightCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUserInput
    userConcepts?: UserConceptCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotesInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookUncheckedCreateNestedManyWithoutUserInput
    readingProgress?: ReadingProgressUncheckedCreateNestedManyWithoutUserInput
    highlights?: HighlightUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUserInput
    userConcepts?: UserConceptUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
  }

  export type BookCreateWithoutNotesInput = {
    id?: string
    title: string
    author?: string | null
    description?: string | null
    coverUrl?: string | null
    fileUrl?: string | null
    fileType: $Enums.BookFileType
    totalPages?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBooksInput
    chapters?: ChapterCreateNestedManyWithoutBookInput
    readingProgress?: ReadingProgressCreateNestedOneWithoutBookInput
    highlights?: HighlightCreateNestedManyWithoutBookInput
    chunks?: ContentChunkCreateNestedManyWithoutBookInput
    bookConcepts?: BookConceptCreateNestedManyWithoutBookInput
    conversations?: ConversationCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutNotesInput = {
    id?: string
    title: string
    author?: string | null
    description?: string | null
    coverUrl?: string | null
    fileUrl?: string | null
    fileType: $Enums.BookFileType
    totalPages?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    chapters?: ChapterUncheckedCreateNestedManyWithoutBookInput
    readingProgress?: ReadingProgressUncheckedCreateNestedOneWithoutBookInput
    highlights?: HighlightUncheckedCreateNestedManyWithoutBookInput
    chunks?: ContentChunkUncheckedCreateNestedManyWithoutBookInput
    bookConcepts?: BookConceptUncheckedCreateNestedManyWithoutBookInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutNotesInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutNotesInput, BookUncheckedCreateWithoutNotesInput>
  }

  export type HighlightCreateWithoutNoteInput = {
    id?: string
    text: string
    color?: string | null
    page?: number | null
    position?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutHighlightsInput
    book: BookCreateNestedOneWithoutHighlightsInput
  }

  export type HighlightUncheckedCreateWithoutNoteInput = {
    id?: string
    text: string
    color?: string | null
    page?: number | null
    position?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    userId: string
    bookId: string
  }

  export type HighlightCreateOrConnectWithoutNoteInput = {
    where: HighlightWhereUniqueInput
    create: XOR<HighlightCreateWithoutNoteInput, HighlightUncheckedCreateWithoutNoteInput>
  }

  export type UserUpsertWithoutNotesInput = {
    update: XOR<UserUpdateWithoutNotesInput, UserUncheckedUpdateWithoutNotesInput>
    create: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotesInput, UserUncheckedUpdateWithoutNotesInput>
  }

  export type UserUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUpdateManyWithoutUserNestedInput
    readingProgress?: ReadingProgressUpdateManyWithoutUserNestedInput
    highlights?: HighlightUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUserNestedInput
    userConcepts?: UserConceptUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUncheckedUpdateManyWithoutUserNestedInput
    readingProgress?: ReadingProgressUncheckedUpdateManyWithoutUserNestedInput
    highlights?: HighlightUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUserNestedInput
    userConcepts?: UserConceptUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookUpsertWithoutNotesInput = {
    update: XOR<BookUpdateWithoutNotesInput, BookUncheckedUpdateWithoutNotesInput>
    create: XOR<BookCreateWithoutNotesInput, BookUncheckedCreateWithoutNotesInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutNotesInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutNotesInput, BookUncheckedUpdateWithoutNotesInput>
  }

  export type BookUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: EnumBookFileTypeFieldUpdateOperationsInput | $Enums.BookFileType
    totalPages?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBooksNestedInput
    chapters?: ChapterUpdateManyWithoutBookNestedInput
    readingProgress?: ReadingProgressUpdateOneWithoutBookNestedInput
    highlights?: HighlightUpdateManyWithoutBookNestedInput
    chunks?: ContentChunkUpdateManyWithoutBookNestedInput
    bookConcepts?: BookConceptUpdateManyWithoutBookNestedInput
    conversations?: ConversationUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: EnumBookFileTypeFieldUpdateOperationsInput | $Enums.BookFileType
    totalPages?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    chapters?: ChapterUncheckedUpdateManyWithoutBookNestedInput
    readingProgress?: ReadingProgressUncheckedUpdateOneWithoutBookNestedInput
    highlights?: HighlightUncheckedUpdateManyWithoutBookNestedInput
    chunks?: ContentChunkUncheckedUpdateManyWithoutBookNestedInput
    bookConcepts?: BookConceptUncheckedUpdateManyWithoutBookNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutBookNestedInput
  }

  export type HighlightUpsertWithoutNoteInput = {
    update: XOR<HighlightUpdateWithoutNoteInput, HighlightUncheckedUpdateWithoutNoteInput>
    create: XOR<HighlightCreateWithoutNoteInput, HighlightUncheckedCreateWithoutNoteInput>
    where?: HighlightWhereInput
  }

  export type HighlightUpdateToOneWithWhereWithoutNoteInput = {
    where?: HighlightWhereInput
    data: XOR<HighlightUpdateWithoutNoteInput, HighlightUncheckedUpdateWithoutNoteInput>
  }

  export type HighlightUpdateWithoutNoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    page?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHighlightsNestedInput
    book?: BookUpdateOneRequiredWithoutHighlightsNestedInput
  }

  export type HighlightUncheckedUpdateWithoutNoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    page?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutConversationsInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookCreateNestedManyWithoutUserInput
    readingProgress?: ReadingProgressCreateNestedManyWithoutUserInput
    highlights?: HighlightCreateNestedManyWithoutUserInput
    notes?: NoteCreateNestedManyWithoutUserInput
    userConcepts?: UserConceptCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutConversationsInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookUncheckedCreateNestedManyWithoutUserInput
    readingProgress?: ReadingProgressUncheckedCreateNestedManyWithoutUserInput
    highlights?: HighlightUncheckedCreateNestedManyWithoutUserInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
    userConcepts?: UserConceptUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutConversationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConversationsInput, UserUncheckedCreateWithoutConversationsInput>
  }

  export type BookCreateWithoutConversationsInput = {
    id?: string
    title: string
    author?: string | null
    description?: string | null
    coverUrl?: string | null
    fileUrl?: string | null
    fileType: $Enums.BookFileType
    totalPages?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBooksInput
    chapters?: ChapterCreateNestedManyWithoutBookInput
    readingProgress?: ReadingProgressCreateNestedOneWithoutBookInput
    highlights?: HighlightCreateNestedManyWithoutBookInput
    notes?: NoteCreateNestedManyWithoutBookInput
    chunks?: ContentChunkCreateNestedManyWithoutBookInput
    bookConcepts?: BookConceptCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutConversationsInput = {
    id?: string
    title: string
    author?: string | null
    description?: string | null
    coverUrl?: string | null
    fileUrl?: string | null
    fileType: $Enums.BookFileType
    totalPages?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    chapters?: ChapterUncheckedCreateNestedManyWithoutBookInput
    readingProgress?: ReadingProgressUncheckedCreateNestedOneWithoutBookInput
    highlights?: HighlightUncheckedCreateNestedManyWithoutBookInput
    notes?: NoteUncheckedCreateNestedManyWithoutBookInput
    chunks?: ContentChunkUncheckedCreateNestedManyWithoutBookInput
    bookConcepts?: BookConceptUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutConversationsInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutConversationsInput, BookUncheckedCreateWithoutConversationsInput>
  }

  export type UserUpsertWithoutConversationsInput = {
    update: XOR<UserUpdateWithoutConversationsInput, UserUncheckedUpdateWithoutConversationsInput>
    create: XOR<UserCreateWithoutConversationsInput, UserUncheckedCreateWithoutConversationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConversationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConversationsInput, UserUncheckedUpdateWithoutConversationsInput>
  }

  export type UserUpdateWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUpdateManyWithoutUserNestedInput
    readingProgress?: ReadingProgressUpdateManyWithoutUserNestedInput
    highlights?: HighlightUpdateManyWithoutUserNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
    userConcepts?: UserConceptUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUncheckedUpdateManyWithoutUserNestedInput
    readingProgress?: ReadingProgressUncheckedUpdateManyWithoutUserNestedInput
    highlights?: HighlightUncheckedUpdateManyWithoutUserNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
    userConcepts?: UserConceptUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookUpsertWithoutConversationsInput = {
    update: XOR<BookUpdateWithoutConversationsInput, BookUncheckedUpdateWithoutConversationsInput>
    create: XOR<BookCreateWithoutConversationsInput, BookUncheckedCreateWithoutConversationsInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutConversationsInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutConversationsInput, BookUncheckedUpdateWithoutConversationsInput>
  }

  export type BookUpdateWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: EnumBookFileTypeFieldUpdateOperationsInput | $Enums.BookFileType
    totalPages?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBooksNestedInput
    chapters?: ChapterUpdateManyWithoutBookNestedInput
    readingProgress?: ReadingProgressUpdateOneWithoutBookNestedInput
    highlights?: HighlightUpdateManyWithoutBookNestedInput
    notes?: NoteUpdateManyWithoutBookNestedInput
    chunks?: ContentChunkUpdateManyWithoutBookNestedInput
    bookConcepts?: BookConceptUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: EnumBookFileTypeFieldUpdateOperationsInput | $Enums.BookFileType
    totalPages?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    chapters?: ChapterUncheckedUpdateManyWithoutBookNestedInput
    readingProgress?: ReadingProgressUncheckedUpdateOneWithoutBookNestedInput
    highlights?: HighlightUncheckedUpdateManyWithoutBookNestedInput
    notes?: NoteUncheckedUpdateManyWithoutBookNestedInput
    chunks?: ContentChunkUncheckedUpdateManyWithoutBookNestedInput
    bookConcepts?: BookConceptUncheckedUpdateManyWithoutBookNestedInput
  }

  export type UserCreateWithoutUserConceptsInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookCreateNestedManyWithoutUserInput
    readingProgress?: ReadingProgressCreateNestedManyWithoutUserInput
    highlights?: HighlightCreateNestedManyWithoutUserInput
    notes?: NoteCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserConceptsInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookUncheckedCreateNestedManyWithoutUserInput
    readingProgress?: ReadingProgressUncheckedCreateNestedManyWithoutUserInput
    highlights?: HighlightUncheckedCreateNestedManyWithoutUserInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserConceptsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserConceptsInput, UserUncheckedCreateWithoutUserConceptsInput>
  }

  export type UserUpsertWithoutUserConceptsInput = {
    update: XOR<UserUpdateWithoutUserConceptsInput, UserUncheckedUpdateWithoutUserConceptsInput>
    create: XOR<UserCreateWithoutUserConceptsInput, UserUncheckedCreateWithoutUserConceptsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserConceptsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserConceptsInput, UserUncheckedUpdateWithoutUserConceptsInput>
  }

  export type UserUpdateWithoutUserConceptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUpdateManyWithoutUserNestedInput
    readingProgress?: ReadingProgressUpdateManyWithoutUserNestedInput
    highlights?: HighlightUpdateManyWithoutUserNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserConceptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUncheckedUpdateManyWithoutUserNestedInput
    readingProgress?: ReadingProgressUncheckedUpdateManyWithoutUserNestedInput
    highlights?: HighlightUncheckedUpdateManyWithoutUserNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookCreateWithoutBookConceptsInput = {
    id?: string
    title: string
    author?: string | null
    description?: string | null
    coverUrl?: string | null
    fileUrl?: string | null
    fileType: $Enums.BookFileType
    totalPages?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBooksInput
    chapters?: ChapterCreateNestedManyWithoutBookInput
    readingProgress?: ReadingProgressCreateNestedOneWithoutBookInput
    highlights?: HighlightCreateNestedManyWithoutBookInput
    notes?: NoteCreateNestedManyWithoutBookInput
    chunks?: ContentChunkCreateNestedManyWithoutBookInput
    conversations?: ConversationCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutBookConceptsInput = {
    id?: string
    title: string
    author?: string | null
    description?: string | null
    coverUrl?: string | null
    fileUrl?: string | null
    fileType: $Enums.BookFileType
    totalPages?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    chapters?: ChapterUncheckedCreateNestedManyWithoutBookInput
    readingProgress?: ReadingProgressUncheckedCreateNestedOneWithoutBookInput
    highlights?: HighlightUncheckedCreateNestedManyWithoutBookInput
    notes?: NoteUncheckedCreateNestedManyWithoutBookInput
    chunks?: ContentChunkUncheckedCreateNestedManyWithoutBookInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutBookConceptsInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutBookConceptsInput, BookUncheckedCreateWithoutBookConceptsInput>
  }

  export type BookUpsertWithoutBookConceptsInput = {
    update: XOR<BookUpdateWithoutBookConceptsInput, BookUncheckedUpdateWithoutBookConceptsInput>
    create: XOR<BookCreateWithoutBookConceptsInput, BookUncheckedCreateWithoutBookConceptsInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutBookConceptsInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutBookConceptsInput, BookUncheckedUpdateWithoutBookConceptsInput>
  }

  export type BookUpdateWithoutBookConceptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: EnumBookFileTypeFieldUpdateOperationsInput | $Enums.BookFileType
    totalPages?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBooksNestedInput
    chapters?: ChapterUpdateManyWithoutBookNestedInput
    readingProgress?: ReadingProgressUpdateOneWithoutBookNestedInput
    highlights?: HighlightUpdateManyWithoutBookNestedInput
    notes?: NoteUpdateManyWithoutBookNestedInput
    chunks?: ContentChunkUpdateManyWithoutBookNestedInput
    conversations?: ConversationUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutBookConceptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: EnumBookFileTypeFieldUpdateOperationsInput | $Enums.BookFileType
    totalPages?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    chapters?: ChapterUncheckedUpdateManyWithoutBookNestedInput
    readingProgress?: ReadingProgressUncheckedUpdateOneWithoutBookNestedInput
    highlights?: HighlightUncheckedUpdateManyWithoutBookNestedInput
    notes?: NoteUncheckedUpdateManyWithoutBookNestedInput
    chunks?: ContentChunkUncheckedUpdateManyWithoutBookNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateManyUserInput = {
    id?: string
    title: string
    author?: string | null
    description?: string | null
    coverUrl?: string | null
    fileUrl?: string | null
    fileType: $Enums.BookFileType
    totalPages?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReadingProgressCreateManyUserInput = {
    id?: string
    currentPage?: number | null
    currentChapter?: number | null
    progress?: number
    lastReadAt?: Date | string
    bookId: string
  }

  export type HighlightCreateManyUserInput = {
    id?: string
    text: string
    color?: string | null
    page?: number | null
    position?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    bookId: string
  }

  export type NoteCreateManyUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookId: string
    highlightId?: string | null
  }

  export type ConversationCreateManyUserInput = {
    id?: string
    bookId: string
  }

  export type UserConceptCreateManyUserInput = {
    id?: string
  }

  export type BookUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: EnumBookFileTypeFieldUpdateOperationsInput | $Enums.BookFileType
    totalPages?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapters?: ChapterUpdateManyWithoutBookNestedInput
    readingProgress?: ReadingProgressUpdateOneWithoutBookNestedInput
    highlights?: HighlightUpdateManyWithoutBookNestedInput
    notes?: NoteUpdateManyWithoutBookNestedInput
    chunks?: ContentChunkUpdateManyWithoutBookNestedInput
    bookConcepts?: BookConceptUpdateManyWithoutBookNestedInput
    conversations?: ConversationUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: EnumBookFileTypeFieldUpdateOperationsInput | $Enums.BookFileType
    totalPages?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapters?: ChapterUncheckedUpdateManyWithoutBookNestedInput
    readingProgress?: ReadingProgressUncheckedUpdateOneWithoutBookNestedInput
    highlights?: HighlightUncheckedUpdateManyWithoutBookNestedInput
    notes?: NoteUncheckedUpdateManyWithoutBookNestedInput
    chunks?: ContentChunkUncheckedUpdateManyWithoutBookNestedInput
    bookConcepts?: BookConceptUncheckedUpdateManyWithoutBookNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: EnumBookFileTypeFieldUpdateOperationsInput | $Enums.BookFileType
    totalPages?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReadingProgressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentPage?: NullableIntFieldUpdateOperationsInput | number | null
    currentChapter?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: FloatFieldUpdateOperationsInput | number
    lastReadAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutReadingProgressNestedInput
  }

  export type ReadingProgressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentPage?: NullableIntFieldUpdateOperationsInput | number | null
    currentChapter?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: FloatFieldUpdateOperationsInput | number
    lastReadAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookId?: StringFieldUpdateOperationsInput | string
  }

  export type ReadingProgressUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentPage?: NullableIntFieldUpdateOperationsInput | number | null
    currentChapter?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: FloatFieldUpdateOperationsInput | number
    lastReadAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookId?: StringFieldUpdateOperationsInput | string
  }

  export type HighlightUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    page?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutHighlightsNestedInput
    note?: NoteUpdateOneWithoutHighlightNestedInput
  }

  export type HighlightUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    page?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookId?: StringFieldUpdateOperationsInput | string
    note?: NoteUncheckedUpdateOneWithoutHighlightNestedInput
  }

  export type HighlightUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    page?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookId?: StringFieldUpdateOperationsInput | string
  }

  export type NoteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutNotesNestedInput
    highlight?: HighlightUpdateOneWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookId?: StringFieldUpdateOperationsInput | string
    highlightId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NoteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookId?: StringFieldUpdateOperationsInput | string
    highlightId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConversationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    book?: BookUpdateOneRequiredWithoutConversationsNestedInput
  }

  export type ConversationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
  }

  export type ConversationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
  }

  export type UserConceptUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type UserConceptUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type UserConceptUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ChapterCreateManyBookInput = {
    id?: string
    title: string
    chapterNo: number
    startPage?: number | null
    endPage?: number | null
  }

  export type HighlightCreateManyBookInput = {
    id?: string
    text: string
    color?: string | null
    page?: number | null
    position?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    userId: string
  }

  export type NoteCreateManyBookInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    highlightId?: string | null
  }

  export type ContentChunkCreateManyBookInput = {
    id?: string
    content: string
    chunkNo: number
    pageStart?: number | null
    pageEnd?: number | null
    sectionId?: string | null
  }

  export type BookConceptCreateManyBookInput = {
    id?: string
  }

  export type ConversationCreateManyBookInput = {
    id?: string
    userId: string
  }

  export type ChapterUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    chapterNo?: IntFieldUpdateOperationsInput | number
    startPage?: NullableIntFieldUpdateOperationsInput | number | null
    endPage?: NullableIntFieldUpdateOperationsInput | number | null
    sections?: SectionUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    chapterNo?: IntFieldUpdateOperationsInput | number
    startPage?: NullableIntFieldUpdateOperationsInput | number | null
    endPage?: NullableIntFieldUpdateOperationsInput | number | null
    sections?: SectionUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateManyWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    chapterNo?: IntFieldUpdateOperationsInput | number
    startPage?: NullableIntFieldUpdateOperationsInput | number | null
    endPage?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HighlightUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    page?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHighlightsNestedInput
    note?: NoteUpdateOneWithoutHighlightNestedInput
  }

  export type HighlightUncheckedUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    page?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    note?: NoteUncheckedUpdateOneWithoutHighlightNestedInput
  }

  export type HighlightUncheckedUpdateManyWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    page?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type NoteUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotesNestedInput
    highlight?: HighlightUpdateOneWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    highlightId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NoteUncheckedUpdateManyWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    highlightId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContentChunkUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    chunkNo?: IntFieldUpdateOperationsInput | number
    pageStart?: NullableIntFieldUpdateOperationsInput | number | null
    pageEnd?: NullableIntFieldUpdateOperationsInput | number | null
    section?: SectionUpdateOneWithoutChunksNestedInput
  }

  export type ContentChunkUncheckedUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    chunkNo?: IntFieldUpdateOperationsInput | number
    pageStart?: NullableIntFieldUpdateOperationsInput | number | null
    pageEnd?: NullableIntFieldUpdateOperationsInput | number | null
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContentChunkUncheckedUpdateManyWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    chunkNo?: IntFieldUpdateOperationsInput | number
    pageStart?: NullableIntFieldUpdateOperationsInput | number | null
    pageEnd?: NullableIntFieldUpdateOperationsInput | number | null
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookConceptUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type BookConceptUncheckedUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type BookConceptUncheckedUpdateManyWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ConversationUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutConversationsNestedInput
  }

  export type ConversationUncheckedUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ConversationUncheckedUpdateManyWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SectionCreateManyChapterInput = {
    id?: string
    title?: string | null
    sectionNo: number
    content?: string | null
  }

  export type SectionUpdateWithoutChapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    sectionNo?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    chunks?: ContentChunkUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutChapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    sectionNo?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    chunks?: ContentChunkUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateManyWithoutChapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    sectionNo?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContentChunkCreateManySectionInput = {
    id?: string
    content: string
    chunkNo: number
    pageStart?: number | null
    pageEnd?: number | null
    bookId: string
  }

  export type ContentChunkUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    chunkNo?: IntFieldUpdateOperationsInput | number
    pageStart?: NullableIntFieldUpdateOperationsInput | number | null
    pageEnd?: NullableIntFieldUpdateOperationsInput | number | null
    book?: BookUpdateOneRequiredWithoutChunksNestedInput
  }

  export type ContentChunkUncheckedUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    chunkNo?: IntFieldUpdateOperationsInput | number
    pageStart?: NullableIntFieldUpdateOperationsInput | number | null
    pageEnd?: NullableIntFieldUpdateOperationsInput | number | null
    bookId?: StringFieldUpdateOperationsInput | string
  }

  export type ContentChunkUncheckedUpdateManyWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    chunkNo?: IntFieldUpdateOperationsInput | number
    pageStart?: NullableIntFieldUpdateOperationsInput | number | null
    pageEnd?: NullableIntFieldUpdateOperationsInput | number | null
    bookId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}