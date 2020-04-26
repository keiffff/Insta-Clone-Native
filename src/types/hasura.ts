import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "comments" */
export type Comments = {
  __typename?: 'comments';
  comment: Scalars['String'];
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  /** An object relationship */
  post: Posts;
  post_id: Scalars['Int'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};

/** aggregated selection of "comments" */
export type CommentsAggregate = {
  __typename?: 'comments_aggregate';
  aggregate?: Maybe<CommentsAggregateFields>;
  nodes: Array<Comments>;
};

/** aggregate fields of "comments" */
export type CommentsAggregateFields = {
  __typename?: 'comments_aggregate_fields';
  avg?: Maybe<CommentsAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<CommentsMaxFields>;
  min?: Maybe<CommentsMinFields>;
  stddev?: Maybe<CommentsStddevFields>;
  stddev_pop?: Maybe<CommentsStddevPopFields>;
  stddev_samp?: Maybe<CommentsStddevSampFields>;
  sum?: Maybe<CommentsSumFields>;
  var_pop?: Maybe<CommentsVarPopFields>;
  var_samp?: Maybe<CommentsVarSampFields>;
  variance?: Maybe<CommentsVarianceFields>;
};

/** aggregate fields of "comments" */
export type CommentsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<CommentsSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "comments" */
export type CommentsAggregateOrderBy = {
  avg?: Maybe<CommentsAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<CommentsMaxOrderBy>;
  min?: Maybe<CommentsMinOrderBy>;
  stddev?: Maybe<CommentsStddevOrderBy>;
  stddev_pop?: Maybe<CommentsStddevPopOrderBy>;
  stddev_samp?: Maybe<CommentsStddevSampOrderBy>;
  sum?: Maybe<CommentsSumOrderBy>;
  var_pop?: Maybe<CommentsVarPopOrderBy>;
  var_samp?: Maybe<CommentsVarSampOrderBy>;
  variance?: Maybe<CommentsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "comments" */
export type CommentsArrRelInsertInput = {
  data: Array<CommentsInsertInput>;
  on_conflict?: Maybe<CommentsOnConflict>;
};

/** aggregate avg on columns */
export type CommentsAvgFields = {
  __typename?: 'comments_avg_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "comments" */
export type CommentsAvgOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "comments". All fields are combined with a logical 'AND'. */
export type CommentsBoolExp = {
  _and?: Maybe<Array<Maybe<CommentsBoolExp>>>;
  _not?: Maybe<CommentsBoolExp>;
  _or?: Maybe<Array<Maybe<CommentsBoolExp>>>;
  comment?: Maybe<StringComparisonExp>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  post?: Maybe<PostsBoolExp>;
  post_id?: Maybe<IntComparisonExp>;
  user?: Maybe<UsersBoolExp>;
  user_id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "comments" */
export enum CommentsConstraint {
  /** unique or primary key constraint */
  CommentsPkey = 'comments_pkey',
}

/** input type for incrementing integer columne in table "comments" */
export type CommentsIncInput = {
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "comments" */
export type CommentsInsertInput = {
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  post?: Maybe<PostsObjRelInsertInput>;
  post_id?: Maybe<Scalars['Int']>;
  user?: Maybe<UsersObjRelInsertInput>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type CommentsMaxFields = {
  __typename?: 'comments_max_fields';
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "comments" */
export type CommentsMaxOrderBy = {
  comment?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type CommentsMinFields = {
  __typename?: 'comments_min_fields';
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "comments" */
export type CommentsMinOrderBy = {
  comment?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "comments" */
export type CommentsMutationResponse = {
  __typename?: 'comments_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Comments>;
};

/** input type for inserting object relation for remote table "comments" */
export type CommentsObjRelInsertInput = {
  data: CommentsInsertInput;
  on_conflict?: Maybe<CommentsOnConflict>;
};

/** on conflict condition type for table "comments" */
export type CommentsOnConflict = {
  constraint: CommentsConstraint;
  update_columns: Array<CommentsUpdateColumn>;
  where?: Maybe<CommentsBoolExp>;
};

/** ordering options when selecting data from "comments" */
export type CommentsOrderBy = {
  comment?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  post?: Maybe<PostsOrderBy>;
  post_id?: Maybe<OrderBy>;
  user?: Maybe<UsersOrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "comments" */
export type CommentsPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "comments" */
export enum CommentsSelectColumn {
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "comments" */
export type CommentsSetInput = {
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type CommentsStddevFields = {
  __typename?: 'comments_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "comments" */
export type CommentsStddevOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type CommentsStddevPopFields = {
  __typename?: 'comments_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "comments" */
export type CommentsStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type CommentsStddevSampFields = {
  __typename?: 'comments_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "comments" */
export type CommentsStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type CommentsSumFields = {
  __typename?: 'comments_sum_fields';
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "comments" */
export type CommentsSumOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** update columns of table "comments" */
export enum CommentsUpdateColumn {
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UserId = 'user_id',
}

/** aggregate var_pop on columns */
export type CommentsVarPopFields = {
  __typename?: 'comments_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "comments" */
export type CommentsVarPopOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type CommentsVarSampFields = {
  __typename?: 'comments_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "comments" */
export type CommentsVarSampOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type CommentsVarianceFields = {
  __typename?: 'comments_variance_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "comments" */
export type CommentsVarianceOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** columns and relationships of "follow" */
export type Follow = {
  __typename?: 'follow';
  follower_id: Scalars['String'];
  following_id: Scalars['String'];
  id: Scalars['Int'];
  /** An object relationship */
  userByFollowerId: Users;
  /** An object relationship */
  userByFollowingId: Users;
};

/** aggregated selection of "follow" */
export type FollowAggregate = {
  __typename?: 'follow_aggregate';
  aggregate?: Maybe<FollowAggregateFields>;
  nodes: Array<Follow>;
};

/** aggregate fields of "follow" */
export type FollowAggregateFields = {
  __typename?: 'follow_aggregate_fields';
  avg?: Maybe<FollowAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<FollowMaxFields>;
  min?: Maybe<FollowMinFields>;
  stddev?: Maybe<FollowStddevFields>;
  stddev_pop?: Maybe<FollowStddevPopFields>;
  stddev_samp?: Maybe<FollowStddevSampFields>;
  sum?: Maybe<FollowSumFields>;
  var_pop?: Maybe<FollowVarPopFields>;
  var_samp?: Maybe<FollowVarSampFields>;
  variance?: Maybe<FollowVarianceFields>;
};

/** aggregate fields of "follow" */
export type FollowAggregateFieldsCountArgs = {
  columns?: Maybe<Array<FollowSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "follow" */
export type FollowAggregateOrderBy = {
  avg?: Maybe<FollowAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<FollowMaxOrderBy>;
  min?: Maybe<FollowMinOrderBy>;
  stddev?: Maybe<FollowStddevOrderBy>;
  stddev_pop?: Maybe<FollowStddevPopOrderBy>;
  stddev_samp?: Maybe<FollowStddevSampOrderBy>;
  sum?: Maybe<FollowSumOrderBy>;
  var_pop?: Maybe<FollowVarPopOrderBy>;
  var_samp?: Maybe<FollowVarSampOrderBy>;
  variance?: Maybe<FollowVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "follow" */
export type FollowArrRelInsertInput = {
  data: Array<FollowInsertInput>;
  on_conflict?: Maybe<FollowOnConflict>;
};

/** aggregate avg on columns */
export type FollowAvgFields = {
  __typename?: 'follow_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "follow" */
export type FollowAvgOrderBy = {
  id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "follow". All fields are combined with a logical 'AND'. */
export type FollowBoolExp = {
  _and?: Maybe<Array<Maybe<FollowBoolExp>>>;
  _not?: Maybe<FollowBoolExp>;
  _or?: Maybe<Array<Maybe<FollowBoolExp>>>;
  follower_id?: Maybe<StringComparisonExp>;
  following_id?: Maybe<StringComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  userByFollowerId?: Maybe<UsersBoolExp>;
  userByFollowingId?: Maybe<UsersBoolExp>;
};

/** unique or primary key constraints on table "follow" */
export enum FollowConstraint {
  /** unique or primary key constraint */
  FollowFollowerIdFollowingIdKey = 'follow_follower_id_following_id_key',
  /** unique or primary key constraint */
  FollowPkey = 'follow_pkey',
}

/** input type for incrementing integer columne in table "follow" */
export type FollowIncInput = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "follow" */
export type FollowInsertInput = {
  follower_id?: Maybe<Scalars['String']>;
  following_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  userByFollowerId?: Maybe<UsersObjRelInsertInput>;
  userByFollowingId?: Maybe<UsersObjRelInsertInput>;
};

/** aggregate max on columns */
export type FollowMaxFields = {
  __typename?: 'follow_max_fields';
  follower_id?: Maybe<Scalars['String']>;
  following_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "follow" */
export type FollowMaxOrderBy = {
  follower_id?: Maybe<OrderBy>;
  following_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type FollowMinFields = {
  __typename?: 'follow_min_fields';
  follower_id?: Maybe<Scalars['String']>;
  following_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "follow" */
export type FollowMinOrderBy = {
  follower_id?: Maybe<OrderBy>;
  following_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "follow" */
export type FollowMutationResponse = {
  __typename?: 'follow_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Follow>;
};

/** input type for inserting object relation for remote table "follow" */
export type FollowObjRelInsertInput = {
  data: FollowInsertInput;
  on_conflict?: Maybe<FollowOnConflict>;
};

/** on conflict condition type for table "follow" */
export type FollowOnConflict = {
  constraint: FollowConstraint;
  update_columns: Array<FollowUpdateColumn>;
  where?: Maybe<FollowBoolExp>;
};

/** ordering options when selecting data from "follow" */
export type FollowOrderBy = {
  follower_id?: Maybe<OrderBy>;
  following_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  userByFollowerId?: Maybe<UsersOrderBy>;
  userByFollowingId?: Maybe<UsersOrderBy>;
};

/** primary key columns input for table: "follow" */
export type FollowPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "follow" */
export enum FollowSelectColumn {
  /** column name */
  FollowerId = 'follower_id',
  /** column name */
  FollowingId = 'following_id',
  /** column name */
  Id = 'id',
}

/** input type for updating data in table "follow" */
export type FollowSetInput = {
  follower_id?: Maybe<Scalars['String']>;
  following_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type FollowStddevFields = {
  __typename?: 'follow_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "follow" */
export type FollowStddevOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type FollowStddevPopFields = {
  __typename?: 'follow_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "follow" */
export type FollowStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type FollowStddevSampFields = {
  __typename?: 'follow_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "follow" */
export type FollowStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type FollowSumFields = {
  __typename?: 'follow_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "follow" */
export type FollowSumOrderBy = {
  id?: Maybe<OrderBy>;
};

/** update columns of table "follow" */
export enum FollowUpdateColumn {
  /** column name */
  FollowerId = 'follower_id',
  /** column name */
  FollowingId = 'following_id',
  /** column name */
  Id = 'id',
}

/** aggregate var_pop on columns */
export type FollowVarPopFields = {
  __typename?: 'follow_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "follow" */
export type FollowVarPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type FollowVarSampFields = {
  __typename?: 'follow_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "follow" */
export type FollowVarSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type FollowVarianceFields = {
  __typename?: 'follow_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "follow" */
export type FollowVarianceOrderBy = {
  id?: Maybe<OrderBy>;
};

/** columns and relationships of "likes" */
export type Likes = {
  __typename?: 'likes';
  id: Scalars['Int'];
  /** An object relationship */
  post: Posts;
  post_id: Scalars['Int'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};

/** aggregated selection of "likes" */
export type LikesAggregate = {
  __typename?: 'likes_aggregate';
  aggregate?: Maybe<LikesAggregateFields>;
  nodes: Array<Likes>;
};

/** aggregate fields of "likes" */
export type LikesAggregateFields = {
  __typename?: 'likes_aggregate_fields';
  avg?: Maybe<LikesAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<LikesMaxFields>;
  min?: Maybe<LikesMinFields>;
  stddev?: Maybe<LikesStddevFields>;
  stddev_pop?: Maybe<LikesStddevPopFields>;
  stddev_samp?: Maybe<LikesStddevSampFields>;
  sum?: Maybe<LikesSumFields>;
  var_pop?: Maybe<LikesVarPopFields>;
  var_samp?: Maybe<LikesVarSampFields>;
  variance?: Maybe<LikesVarianceFields>;
};

/** aggregate fields of "likes" */
export type LikesAggregateFieldsCountArgs = {
  columns?: Maybe<Array<LikesSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "likes" */
export type LikesAggregateOrderBy = {
  avg?: Maybe<LikesAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<LikesMaxOrderBy>;
  min?: Maybe<LikesMinOrderBy>;
  stddev?: Maybe<LikesStddevOrderBy>;
  stddev_pop?: Maybe<LikesStddevPopOrderBy>;
  stddev_samp?: Maybe<LikesStddevSampOrderBy>;
  sum?: Maybe<LikesSumOrderBy>;
  var_pop?: Maybe<LikesVarPopOrderBy>;
  var_samp?: Maybe<LikesVarSampOrderBy>;
  variance?: Maybe<LikesVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "likes" */
export type LikesArrRelInsertInput = {
  data: Array<LikesInsertInput>;
  on_conflict?: Maybe<LikesOnConflict>;
};

/** aggregate avg on columns */
export type LikesAvgFields = {
  __typename?: 'likes_avg_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "likes" */
export type LikesAvgOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "likes". All fields are combined with a logical 'AND'. */
export type LikesBoolExp = {
  _and?: Maybe<Array<Maybe<LikesBoolExp>>>;
  _not?: Maybe<LikesBoolExp>;
  _or?: Maybe<Array<Maybe<LikesBoolExp>>>;
  id?: Maybe<IntComparisonExp>;
  post?: Maybe<PostsBoolExp>;
  post_id?: Maybe<IntComparisonExp>;
  user?: Maybe<UsersBoolExp>;
  user_id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "likes" */
export enum LikesConstraint {
  /** unique or primary key constraint */
  LikesPkey = 'likes_pkey',
  /** unique or primary key constraint */
  LikesPostIdUserIdKey = 'likes_post_id_user_id_key',
}

/** input type for incrementing integer columne in table "likes" */
export type LikesIncInput = {
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "likes" */
export type LikesInsertInput = {
  id?: Maybe<Scalars['Int']>;
  post?: Maybe<PostsObjRelInsertInput>;
  post_id?: Maybe<Scalars['Int']>;
  user?: Maybe<UsersObjRelInsertInput>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type LikesMaxFields = {
  __typename?: 'likes_max_fields';
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "likes" */
export type LikesMaxOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type LikesMinFields = {
  __typename?: 'likes_min_fields';
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "likes" */
export type LikesMinOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "likes" */
export type LikesMutationResponse = {
  __typename?: 'likes_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Likes>;
};

/** input type for inserting object relation for remote table "likes" */
export type LikesObjRelInsertInput = {
  data: LikesInsertInput;
  on_conflict?: Maybe<LikesOnConflict>;
};

/** on conflict condition type for table "likes" */
export type LikesOnConflict = {
  constraint: LikesConstraint;
  update_columns: Array<LikesUpdateColumn>;
  where?: Maybe<LikesBoolExp>;
};

/** ordering options when selecting data from "likes" */
export type LikesOrderBy = {
  id?: Maybe<OrderBy>;
  post?: Maybe<PostsOrderBy>;
  post_id?: Maybe<OrderBy>;
  user?: Maybe<UsersOrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "likes" */
export type LikesPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "likes" */
export enum LikesSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "likes" */
export type LikesSetInput = {
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type LikesStddevFields = {
  __typename?: 'likes_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "likes" */
export type LikesStddevOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type LikesStddevPopFields = {
  __typename?: 'likes_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "likes" */
export type LikesStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type LikesStddevSampFields = {
  __typename?: 'likes_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "likes" */
export type LikesStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type LikesSumFields = {
  __typename?: 'likes_sum_fields';
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "likes" */
export type LikesSumOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** update columns of table "likes" */
export enum LikesUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UserId = 'user_id',
}

/** aggregate var_pop on columns */
export type LikesVarPopFields = {
  __typename?: 'likes_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "likes" */
export type LikesVarPopOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type LikesVarSampFields = {
  __typename?: 'likes_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "likes" */
export type LikesVarSampOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type LikesVarianceFields = {
  __typename?: 'likes_variance_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "likes" */
export type LikesVarianceOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** mutation root */
export type MutationRoot = {
  __typename?: 'mutation_root';
  /** delete data from the table: "comments" */
  delete_comments?: Maybe<CommentsMutationResponse>;
  /** delete single row from the table: "comments" */
  delete_comments_by_pk?: Maybe<Comments>;
  /** delete data from the table: "follow" */
  delete_follow?: Maybe<FollowMutationResponse>;
  /** delete single row from the table: "follow" */
  delete_follow_by_pk?: Maybe<Follow>;
  /** delete data from the table: "likes" */
  delete_likes?: Maybe<LikesMutationResponse>;
  /** delete single row from the table: "likes" */
  delete_likes_by_pk?: Maybe<Likes>;
  /** delete data from the table: "posts" */
  delete_posts?: Maybe<PostsMutationResponse>;
  /** delete single row from the table: "posts" */
  delete_posts_by_pk?: Maybe<Posts>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<UsersMutationResponse>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "comments" */
  insert_comments?: Maybe<CommentsMutationResponse>;
  /** insert a single row into the table: "comments" */
  insert_comments_one?: Maybe<Comments>;
  /** insert data into the table: "follow" */
  insert_follow?: Maybe<FollowMutationResponse>;
  /** insert a single row into the table: "follow" */
  insert_follow_one?: Maybe<Follow>;
  /** insert data into the table: "likes" */
  insert_likes?: Maybe<LikesMutationResponse>;
  /** insert a single row into the table: "likes" */
  insert_likes_one?: Maybe<Likes>;
  /** insert data into the table: "posts" */
  insert_posts?: Maybe<PostsMutationResponse>;
  /** insert a single row into the table: "posts" */
  insert_posts_one?: Maybe<Posts>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<UsersMutationResponse>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "comments" */
  update_comments?: Maybe<CommentsMutationResponse>;
  /** update single row of the table: "comments" */
  update_comments_by_pk?: Maybe<Comments>;
  /** update data of the table: "follow" */
  update_follow?: Maybe<FollowMutationResponse>;
  /** update single row of the table: "follow" */
  update_follow_by_pk?: Maybe<Follow>;
  /** update data of the table: "likes" */
  update_likes?: Maybe<LikesMutationResponse>;
  /** update single row of the table: "likes" */
  update_likes_by_pk?: Maybe<Likes>;
  /** update data of the table: "posts" */
  update_posts?: Maybe<PostsMutationResponse>;
  /** update single row of the table: "posts" */
  update_posts_by_pk?: Maybe<Posts>;
  /** update data of the table: "users" */
  update_users?: Maybe<UsersMutationResponse>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};

/** mutation root */
export type MutationRootDeleteCommentsArgs = {
  where: CommentsBoolExp;
};

/** mutation root */
export type MutationRootDeleteCommentsByPkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type MutationRootDeleteFollowArgs = {
  where: FollowBoolExp;
};

/** mutation root */
export type MutationRootDeleteFollowByPkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type MutationRootDeleteLikesArgs = {
  where: LikesBoolExp;
};

/** mutation root */
export type MutationRootDeleteLikesByPkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type MutationRootDeletePostsArgs = {
  where: PostsBoolExp;
};

/** mutation root */
export type MutationRootDeletePostsByPkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type MutationRootDeleteUsersArgs = {
  where: UsersBoolExp;
};

/** mutation root */
export type MutationRootDeleteUsersByPkArgs = {
  id: Scalars['String'];
};

/** mutation root */
export type MutationRootInsertCommentsArgs = {
  objects: Array<CommentsInsertInput>;
  on_conflict?: Maybe<CommentsOnConflict>;
};

/** mutation root */
export type MutationRootInsertCommentsOneArgs = {
  object: CommentsInsertInput;
  on_conflict?: Maybe<CommentsOnConflict>;
};

/** mutation root */
export type MutationRootInsertFollowArgs = {
  objects: Array<FollowInsertInput>;
  on_conflict?: Maybe<FollowOnConflict>;
};

/** mutation root */
export type MutationRootInsertFollowOneArgs = {
  object: FollowInsertInput;
  on_conflict?: Maybe<FollowOnConflict>;
};

/** mutation root */
export type MutationRootInsertLikesArgs = {
  objects: Array<LikesInsertInput>;
  on_conflict?: Maybe<LikesOnConflict>;
};

/** mutation root */
export type MutationRootInsertLikesOneArgs = {
  object: LikesInsertInput;
  on_conflict?: Maybe<LikesOnConflict>;
};

/** mutation root */
export type MutationRootInsertPostsArgs = {
  objects: Array<PostsInsertInput>;
  on_conflict?: Maybe<PostsOnConflict>;
};

/** mutation root */
export type MutationRootInsertPostsOneArgs = {
  object: PostsInsertInput;
  on_conflict?: Maybe<PostsOnConflict>;
};

/** mutation root */
export type MutationRootInsertUsersArgs = {
  objects: Array<UsersInsertInput>;
  on_conflict?: Maybe<UsersOnConflict>;
};

/** mutation root */
export type MutationRootInsertUsersOneArgs = {
  object: UsersInsertInput;
  on_conflict?: Maybe<UsersOnConflict>;
};

/** mutation root */
export type MutationRootUpdateCommentsArgs = {
  _inc?: Maybe<CommentsIncInput>;
  _set?: Maybe<CommentsSetInput>;
  where: CommentsBoolExp;
};

/** mutation root */
export type MutationRootUpdateCommentsByPkArgs = {
  _inc?: Maybe<CommentsIncInput>;
  _set?: Maybe<CommentsSetInput>;
  pk_columns: CommentsPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateFollowArgs = {
  _inc?: Maybe<FollowIncInput>;
  _set?: Maybe<FollowSetInput>;
  where: FollowBoolExp;
};

/** mutation root */
export type MutationRootUpdateFollowByPkArgs = {
  _inc?: Maybe<FollowIncInput>;
  _set?: Maybe<FollowSetInput>;
  pk_columns: FollowPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateLikesArgs = {
  _inc?: Maybe<LikesIncInput>;
  _set?: Maybe<LikesSetInput>;
  where: LikesBoolExp;
};

/** mutation root */
export type MutationRootUpdateLikesByPkArgs = {
  _inc?: Maybe<LikesIncInput>;
  _set?: Maybe<LikesSetInput>;
  pk_columns: LikesPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdatePostsArgs = {
  _inc?: Maybe<PostsIncInput>;
  _set?: Maybe<PostsSetInput>;
  where: PostsBoolExp;
};

/** mutation root */
export type MutationRootUpdatePostsByPkArgs = {
  _inc?: Maybe<PostsIncInput>;
  _set?: Maybe<PostsSetInput>;
  pk_columns: PostsPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateUsersArgs = {
  _set?: Maybe<UsersSetInput>;
  where: UsersBoolExp;
};

/** mutation root */
export type MutationRootUpdateUsersByPkArgs = {
  _set?: Maybe<UsersSetInput>;
  pk_columns: UsersPkColumnsInput;
};

/** column ordering options */
export enum OrderBy {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "posts" */
export type Posts = {
  __typename?: 'posts';
  caption: Scalars['String'];
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregated array relationship */
  comments_aggregate: CommentsAggregate;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  image: Scalars['String'];
  /** An array relationship */
  likes: Array<Likes>;
  /** An aggregated array relationship */
  likes_aggregate: LikesAggregate;
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};

/** columns and relationships of "posts" */
export type PostsCommentsArgs = {
  distinct_on?: Maybe<Array<CommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CommentsOrderBy>>;
  where?: Maybe<CommentsBoolExp>;
};

/** columns and relationships of "posts" */
export type PostsCommentsAggregateArgs = {
  distinct_on?: Maybe<Array<CommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CommentsOrderBy>>;
  where?: Maybe<CommentsBoolExp>;
};

/** columns and relationships of "posts" */
export type PostsLikesArgs = {
  distinct_on?: Maybe<Array<LikesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LikesOrderBy>>;
  where?: Maybe<LikesBoolExp>;
};

/** columns and relationships of "posts" */
export type PostsLikesAggregateArgs = {
  distinct_on?: Maybe<Array<LikesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LikesOrderBy>>;
  where?: Maybe<LikesBoolExp>;
};

/** aggregated selection of "posts" */
export type PostsAggregate = {
  __typename?: 'posts_aggregate';
  aggregate?: Maybe<PostsAggregateFields>;
  nodes: Array<Posts>;
};

/** aggregate fields of "posts" */
export type PostsAggregateFields = {
  __typename?: 'posts_aggregate_fields';
  avg?: Maybe<PostsAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<PostsMaxFields>;
  min?: Maybe<PostsMinFields>;
  stddev?: Maybe<PostsStddevFields>;
  stddev_pop?: Maybe<PostsStddevPopFields>;
  stddev_samp?: Maybe<PostsStddevSampFields>;
  sum?: Maybe<PostsSumFields>;
  var_pop?: Maybe<PostsVarPopFields>;
  var_samp?: Maybe<PostsVarSampFields>;
  variance?: Maybe<PostsVarianceFields>;
};

/** aggregate fields of "posts" */
export type PostsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<PostsSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "posts" */
export type PostsAggregateOrderBy = {
  avg?: Maybe<PostsAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<PostsMaxOrderBy>;
  min?: Maybe<PostsMinOrderBy>;
  stddev?: Maybe<PostsStddevOrderBy>;
  stddev_pop?: Maybe<PostsStddevPopOrderBy>;
  stddev_samp?: Maybe<PostsStddevSampOrderBy>;
  sum?: Maybe<PostsSumOrderBy>;
  var_pop?: Maybe<PostsVarPopOrderBy>;
  var_samp?: Maybe<PostsVarSampOrderBy>;
  variance?: Maybe<PostsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "posts" */
export type PostsArrRelInsertInput = {
  data: Array<PostsInsertInput>;
  on_conflict?: Maybe<PostsOnConflict>;
};

/** aggregate avg on columns */
export type PostsAvgFields = {
  __typename?: 'posts_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "posts" */
export type PostsAvgOrderBy = {
  id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "posts". All fields are combined with a logical 'AND'. */
export type PostsBoolExp = {
  _and?: Maybe<Array<Maybe<PostsBoolExp>>>;
  _not?: Maybe<PostsBoolExp>;
  _or?: Maybe<Array<Maybe<PostsBoolExp>>>;
  caption?: Maybe<StringComparisonExp>;
  comments?: Maybe<CommentsBoolExp>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  image?: Maybe<StringComparisonExp>;
  likes?: Maybe<LikesBoolExp>;
  user?: Maybe<UsersBoolExp>;
  user_id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "posts" */
export enum PostsConstraint {
  /** unique or primary key constraint */
  PostsPkey = 'posts_pkey',
}

/** input type for incrementing integer columne in table "posts" */
export type PostsIncInput = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "posts" */
export type PostsInsertInput = {
  caption?: Maybe<Scalars['String']>;
  comments?: Maybe<CommentsArrRelInsertInput>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  likes?: Maybe<LikesArrRelInsertInput>;
  user?: Maybe<UsersObjRelInsertInput>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type PostsMaxFields = {
  __typename?: 'posts_max_fields';
  caption?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "posts" */
export type PostsMaxOrderBy = {
  caption?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  image?: Maybe<OrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type PostsMinFields = {
  __typename?: 'posts_min_fields';
  caption?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "posts" */
export type PostsMinOrderBy = {
  caption?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  image?: Maybe<OrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "posts" */
export type PostsMutationResponse = {
  __typename?: 'posts_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Posts>;
};

/** input type for inserting object relation for remote table "posts" */
export type PostsObjRelInsertInput = {
  data: PostsInsertInput;
  on_conflict?: Maybe<PostsOnConflict>;
};

/** on conflict condition type for table "posts" */
export type PostsOnConflict = {
  constraint: PostsConstraint;
  update_columns: Array<PostsUpdateColumn>;
  where?: Maybe<PostsBoolExp>;
};

/** ordering options when selecting data from "posts" */
export type PostsOrderBy = {
  caption?: Maybe<OrderBy>;
  comments_aggregate?: Maybe<CommentsAggregateOrderBy>;
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  image?: Maybe<OrderBy>;
  likes_aggregate?: Maybe<LikesAggregateOrderBy>;
  user?: Maybe<UsersOrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "posts" */
export type PostsPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "posts" */
export enum PostsSelectColumn {
  /** column name */
  Caption = 'caption',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "posts" */
export type PostsSetInput = {
  caption?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type PostsStddevFields = {
  __typename?: 'posts_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "posts" */
export type PostsStddevOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type PostsStddevPopFields = {
  __typename?: 'posts_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "posts" */
export type PostsStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type PostsStddevSampFields = {
  __typename?: 'posts_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "posts" */
export type PostsStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type PostsSumFields = {
  __typename?: 'posts_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "posts" */
export type PostsSumOrderBy = {
  id?: Maybe<OrderBy>;
};

/** update columns of table "posts" */
export enum PostsUpdateColumn {
  /** column name */
  Caption = 'caption',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  UserId = 'user_id',
}

/** aggregate var_pop on columns */
export type PostsVarPopFields = {
  __typename?: 'posts_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "posts" */
export type PostsVarPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type PostsVarSampFields = {
  __typename?: 'posts_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "posts" */
export type PostsVarSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type PostsVarianceFields = {
  __typename?: 'posts_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "posts" */
export type PostsVarianceOrderBy = {
  id?: Maybe<OrderBy>;
};

/** query root */
export type QueryRoot = {
  __typename?: 'query_root';
  /** fetch data from the table: "comments" */
  comments: Array<Comments>;
  /** fetch aggregated fields from the table: "comments" */
  comments_aggregate: CommentsAggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** fetch data from the table: "follow" */
  follow: Array<Follow>;
  /** fetch aggregated fields from the table: "follow" */
  follow_aggregate: FollowAggregate;
  /** fetch data from the table: "follow" using primary key columns */
  follow_by_pk?: Maybe<Follow>;
  /** fetch data from the table: "likes" */
  likes: Array<Likes>;
  /** fetch aggregated fields from the table: "likes" */
  likes_aggregate: LikesAggregate;
  /** fetch data from the table: "likes" using primary key columns */
  likes_by_pk?: Maybe<Likes>;
  /** fetch data from the table: "posts" */
  posts: Array<Posts>;
  /** fetch aggregated fields from the table: "posts" */
  posts_aggregate: PostsAggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};

/** query root */
export type QueryRootCommentsArgs = {
  distinct_on?: Maybe<Array<CommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CommentsOrderBy>>;
  where?: Maybe<CommentsBoolExp>;
};

/** query root */
export type QueryRootCommentsAggregateArgs = {
  distinct_on?: Maybe<Array<CommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CommentsOrderBy>>;
  where?: Maybe<CommentsBoolExp>;
};

/** query root */
export type QueryRootCommentsByPkArgs = {
  id: Scalars['Int'];
};

/** query root */
export type QueryRootFollowArgs = {
  distinct_on?: Maybe<Array<FollowSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FollowOrderBy>>;
  where?: Maybe<FollowBoolExp>;
};

/** query root */
export type QueryRootFollowAggregateArgs = {
  distinct_on?: Maybe<Array<FollowSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FollowOrderBy>>;
  where?: Maybe<FollowBoolExp>;
};

/** query root */
export type QueryRootFollowByPkArgs = {
  id: Scalars['Int'];
};

/** query root */
export type QueryRootLikesArgs = {
  distinct_on?: Maybe<Array<LikesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LikesOrderBy>>;
  where?: Maybe<LikesBoolExp>;
};

/** query root */
export type QueryRootLikesAggregateArgs = {
  distinct_on?: Maybe<Array<LikesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LikesOrderBy>>;
  where?: Maybe<LikesBoolExp>;
};

/** query root */
export type QueryRootLikesByPkArgs = {
  id: Scalars['Int'];
};

/** query root */
export type QueryRootPostsArgs = {
  distinct_on?: Maybe<Array<PostsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostsOrderBy>>;
  where?: Maybe<PostsBoolExp>;
};

/** query root */
export type QueryRootPostsAggregateArgs = {
  distinct_on?: Maybe<Array<PostsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostsOrderBy>>;
  where?: Maybe<PostsBoolExp>;
};

/** query root */
export type QueryRootPostsByPkArgs = {
  id: Scalars['Int'];
};

/** query root */
export type QueryRootUsersArgs = {
  distinct_on?: Maybe<Array<UsersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UsersOrderBy>>;
  where?: Maybe<UsersBoolExp>;
};

/** query root */
export type QueryRootUsersAggregateArgs = {
  distinct_on?: Maybe<Array<UsersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UsersOrderBy>>;
  where?: Maybe<UsersBoolExp>;
};

/** query root */
export type QueryRootUsersByPkArgs = {
  id: Scalars['String'];
};

/** subscription root */
export type SubscriptionRoot = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "comments" */
  comments: Array<Comments>;
  /** fetch aggregated fields from the table: "comments" */
  comments_aggregate: CommentsAggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** fetch data from the table: "follow" */
  follow: Array<Follow>;
  /** fetch aggregated fields from the table: "follow" */
  follow_aggregate: FollowAggregate;
  /** fetch data from the table: "follow" using primary key columns */
  follow_by_pk?: Maybe<Follow>;
  /** fetch data from the table: "likes" */
  likes: Array<Likes>;
  /** fetch aggregated fields from the table: "likes" */
  likes_aggregate: LikesAggregate;
  /** fetch data from the table: "likes" using primary key columns */
  likes_by_pk?: Maybe<Likes>;
  /** fetch data from the table: "posts" */
  posts: Array<Posts>;
  /** fetch aggregated fields from the table: "posts" */
  posts_aggregate: PostsAggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};

/** subscription root */
export type SubscriptionRootCommentsArgs = {
  distinct_on?: Maybe<Array<CommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CommentsOrderBy>>;
  where?: Maybe<CommentsBoolExp>;
};

/** subscription root */
export type SubscriptionRootCommentsAggregateArgs = {
  distinct_on?: Maybe<Array<CommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CommentsOrderBy>>;
  where?: Maybe<CommentsBoolExp>;
};

/** subscription root */
export type SubscriptionRootCommentsByPkArgs = {
  id: Scalars['Int'];
};

/** subscription root */
export type SubscriptionRootFollowArgs = {
  distinct_on?: Maybe<Array<FollowSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FollowOrderBy>>;
  where?: Maybe<FollowBoolExp>;
};

/** subscription root */
export type SubscriptionRootFollowAggregateArgs = {
  distinct_on?: Maybe<Array<FollowSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FollowOrderBy>>;
  where?: Maybe<FollowBoolExp>;
};

/** subscription root */
export type SubscriptionRootFollowByPkArgs = {
  id: Scalars['Int'];
};

/** subscription root */
export type SubscriptionRootLikesArgs = {
  distinct_on?: Maybe<Array<LikesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LikesOrderBy>>;
  where?: Maybe<LikesBoolExp>;
};

/** subscription root */
export type SubscriptionRootLikesAggregateArgs = {
  distinct_on?: Maybe<Array<LikesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LikesOrderBy>>;
  where?: Maybe<LikesBoolExp>;
};

/** subscription root */
export type SubscriptionRootLikesByPkArgs = {
  id: Scalars['Int'];
};

/** subscription root */
export type SubscriptionRootPostsArgs = {
  distinct_on?: Maybe<Array<PostsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostsOrderBy>>;
  where?: Maybe<PostsBoolExp>;
};

/** subscription root */
export type SubscriptionRootPostsAggregateArgs = {
  distinct_on?: Maybe<Array<PostsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostsOrderBy>>;
  where?: Maybe<PostsBoolExp>;
};

/** subscription root */
export type SubscriptionRootPostsByPkArgs = {
  id: Scalars['Int'];
};

/** subscription root */
export type SubscriptionRootUsersArgs = {
  distinct_on?: Maybe<Array<UsersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UsersOrderBy>>;
  where?: Maybe<UsersBoolExp>;
};

/** subscription root */
export type SubscriptionRootUsersAggregateArgs = {
  distinct_on?: Maybe<Array<UsersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UsersOrderBy>>;
  where?: Maybe<UsersBoolExp>;
};

/** subscription root */
export type SubscriptionRootUsersByPkArgs = {
  id: Scalars['String'];
};

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  avatar: Scalars['String'];
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregated array relationship */
  comments_aggregate: CommentsAggregate;
  description?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  /** An array relationship */
  followsByFollowerId: Array<Follow>;
  /** An aggregated array relationship */
  followsByFollowerId_aggregate: FollowAggregate;
  /** An array relationship */
  followsByFollowingId: Array<Follow>;
  /** An aggregated array relationship */
  followsByFollowingId_aggregate: FollowAggregate;
  id: Scalars['String'];
  /** An array relationship */
  likes: Array<Likes>;
  /** An aggregated array relationship */
  likes_aggregate: LikesAggregate;
  name: Scalars['String'];
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregated array relationship */
  posts_aggregate: PostsAggregate;
};

/** columns and relationships of "users" */
export type UsersCommentsArgs = {
  distinct_on?: Maybe<Array<CommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CommentsOrderBy>>;
  where?: Maybe<CommentsBoolExp>;
};

/** columns and relationships of "users" */
export type UsersCommentsAggregateArgs = {
  distinct_on?: Maybe<Array<CommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CommentsOrderBy>>;
  where?: Maybe<CommentsBoolExp>;
};

/** columns and relationships of "users" */
export type UsersFollowsByFollowerIdArgs = {
  distinct_on?: Maybe<Array<FollowSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FollowOrderBy>>;
  where?: Maybe<FollowBoolExp>;
};

/** columns and relationships of "users" */
export type UsersFollowsByFollowerIdAggregateArgs = {
  distinct_on?: Maybe<Array<FollowSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FollowOrderBy>>;
  where?: Maybe<FollowBoolExp>;
};

/** columns and relationships of "users" */
export type UsersFollowsByFollowingIdArgs = {
  distinct_on?: Maybe<Array<FollowSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FollowOrderBy>>;
  where?: Maybe<FollowBoolExp>;
};

/** columns and relationships of "users" */
export type UsersFollowsByFollowingIdAggregateArgs = {
  distinct_on?: Maybe<Array<FollowSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FollowOrderBy>>;
  where?: Maybe<FollowBoolExp>;
};

/** columns and relationships of "users" */
export type UsersLikesArgs = {
  distinct_on?: Maybe<Array<LikesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LikesOrderBy>>;
  where?: Maybe<LikesBoolExp>;
};

/** columns and relationships of "users" */
export type UsersLikesAggregateArgs = {
  distinct_on?: Maybe<Array<LikesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LikesOrderBy>>;
  where?: Maybe<LikesBoolExp>;
};

/** columns and relationships of "users" */
export type UsersPostsArgs = {
  distinct_on?: Maybe<Array<PostsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostsOrderBy>>;
  where?: Maybe<PostsBoolExp>;
};

/** columns and relationships of "users" */
export type UsersPostsAggregateArgs = {
  distinct_on?: Maybe<Array<PostsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostsOrderBy>>;
  where?: Maybe<PostsBoolExp>;
};

/** aggregated selection of "users" */
export type UsersAggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<UsersAggregateFields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type UsersAggregateFields = {
  __typename?: 'users_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<UsersMaxFields>;
  min?: Maybe<UsersMinFields>;
};

/** aggregate fields of "users" */
export type UsersAggregateFieldsCountArgs = {
  columns?: Maybe<Array<UsersSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type UsersAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<UsersMaxOrderBy>;
  min?: Maybe<UsersMinOrderBy>;
};

/** input type for inserting array relation for remote table "users" */
export type UsersArrRelInsertInput = {
  data: Array<UsersInsertInput>;
  on_conflict?: Maybe<UsersOnConflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type UsersBoolExp = {
  _and?: Maybe<Array<Maybe<UsersBoolExp>>>;
  _not?: Maybe<UsersBoolExp>;
  _or?: Maybe<Array<Maybe<UsersBoolExp>>>;
  avatar?: Maybe<StringComparisonExp>;
  comments?: Maybe<CommentsBoolExp>;
  description?: Maybe<StringComparisonExp>;
  email?: Maybe<StringComparisonExp>;
  followsByFollowerId?: Maybe<FollowBoolExp>;
  followsByFollowingId?: Maybe<FollowBoolExp>;
  id?: Maybe<StringComparisonExp>;
  likes?: Maybe<LikesBoolExp>;
  name?: Maybe<StringComparisonExp>;
  posts?: Maybe<PostsBoolExp>;
};

/** unique or primary key constraints on table "users" */
export enum UsersConstraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey',
}

/** input type for inserting data into table "users" */
export type UsersInsertInput = {
  avatar?: Maybe<Scalars['String']>;
  comments?: Maybe<CommentsArrRelInsertInput>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  followsByFollowerId?: Maybe<FollowArrRelInsertInput>;
  followsByFollowingId?: Maybe<FollowArrRelInsertInput>;
  id?: Maybe<Scalars['String']>;
  likes?: Maybe<LikesArrRelInsertInput>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<PostsArrRelInsertInput>;
};

/** aggregate max on columns */
export type UsersMaxFields = {
  __typename?: 'users_max_fields';
  avatar?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "users" */
export type UsersMaxOrderBy = {
  avatar?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  email?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type UsersMinFields = {
  __typename?: 'users_min_fields';
  avatar?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "users" */
export type UsersMinOrderBy = {
  avatar?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  email?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

/** response of any mutation on the table "users" */
export type UsersMutationResponse = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type UsersObjRelInsertInput = {
  data: UsersInsertInput;
  on_conflict?: Maybe<UsersOnConflict>;
};

/** on conflict condition type for table "users" */
export type UsersOnConflict = {
  constraint: UsersConstraint;
  update_columns: Array<UsersUpdateColumn>;
  where?: Maybe<UsersBoolExp>;
};

/** ordering options when selecting data from "users" */
export type UsersOrderBy = {
  avatar?: Maybe<OrderBy>;
  comments_aggregate?: Maybe<CommentsAggregateOrderBy>;
  description?: Maybe<OrderBy>;
  email?: Maybe<OrderBy>;
  followsByFollowerId_aggregate?: Maybe<FollowAggregateOrderBy>;
  followsByFollowingId_aggregate?: Maybe<FollowAggregateOrderBy>;
  id?: Maybe<OrderBy>;
  likes_aggregate?: Maybe<LikesAggregateOrderBy>;
  name?: Maybe<OrderBy>;
  posts_aggregate?: Maybe<PostsAggregateOrderBy>;
};

/** primary key columns input for table: "users" */
export type UsersPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export enum UsersSelectColumn {
  /** column name */
  Avatar = 'avatar',
  /** column name */
  Description = 'description',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "users" */
export type UsersSetInput = {
  avatar?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum UsersUpdateColumn {
  /** column name */
  Avatar = 'avatar',
  /** column name */
  Description = 'description',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

export type GetProfileInfoQueryVariables = {
  id: Scalars['String'];
};

export type GetProfileInfoQuery = { __typename?: 'query_root' } & {
  users: Array<
    { __typename?: 'users' } & Pick<Users, 'name' | 'avatar' | 'description'> & {
        posts: Array<{ __typename?: 'posts' } & Pick<Posts, 'id' | 'image'>>;
        posts_aggregate: { __typename?: 'posts_aggregate' } & {
          aggregate?: Maybe<{ __typename?: 'posts_aggregate_fields' } & Pick<PostsAggregateFields, 'count'>>;
        };
      }
  >;
};

export type GetUsersInfoQueryVariables = {
  id: Scalars['String'];
};

export type GetUsersInfoQuery = { __typename?: 'query_root' } & {
  users_by_pk?: Maybe<{ __typename?: 'users' } & Pick<Users, 'name' | 'avatar'>>;
};

export type GetUsersAvatarQueryVariables = {
  id: Scalars['String'];
};

export type GetUsersAvatarQuery = { __typename?: 'query_root' } & {
  users: Array<{ __typename?: 'users' } & Pick<Users, 'avatar'>>;
};

export type GetUsersEditableInfoQueryVariables = {
  id: Scalars['String'];
};

export type GetUsersEditableInfoQuery = { __typename?: 'query_root' } & {
  users: Array<{ __typename?: 'users' } & Pick<Users, 'name' | 'avatar' | 'description'>>;
};

export type GetUnfollowingUsersQueryVariables = {
  id: Scalars['String'];
};

export type GetUnfollowingUsersQuery = { __typename?: 'query_root' } & {
  users: Array<{ __typename?: 'users' } & Pick<Users, 'id' | 'avatar' | 'name'>>;
};

export type NotifyNewPostsSubscriptionVariables = {
  userId: Scalars['String'];
};

export type NotifyNewPostsSubscription = { __typename?: 'subscription_root' } & {
  posts: Array<
    { __typename?: 'posts' } & Pick<Posts, 'id' | 'image' | 'caption' | 'created_at'> & {
        likes: Array<{ __typename?: 'likes' } & Pick<Likes, 'id'>>;
        user: { __typename?: 'users' } & Pick<Users, 'id' | 'avatar' | 'name'>;
        comments: Array<
          { __typename?: 'comments' } & Pick<Comments, 'id' | 'comment'> & {
              user: { __typename?: 'users' } & Pick<Users, 'name'>;
            }
        >;
      }
  >;
};

export const GetProfileInfoDocument = gql`
  query getProfileInfo($id: String!) {
    users(where: { id: { _eq: $id } }) {
      name
      avatar
      description
      posts(order_by: { created_at: desc }) {
        id
        image
      }
      posts_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;

/**
 * __useGetProfileInfoQuery__
 *
 * To run a query within a React component, call `useGetProfileInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileInfoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProfileInfoQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetProfileInfoQuery, GetProfileInfoQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetProfileInfoQuery, GetProfileInfoQueryVariables>(
    GetProfileInfoDocument,
    baseOptions,
  );
}
export function useGetProfileInfoLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProfileInfoQuery, GetProfileInfoQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetProfileInfoQuery, GetProfileInfoQueryVariables>(
    GetProfileInfoDocument,
    baseOptions,
  );
}
export type GetProfileInfoQueryHookResult = ReturnType<typeof useGetProfileInfoQuery>;
export type GetProfileInfoLazyQueryHookResult = ReturnType<typeof useGetProfileInfoLazyQuery>;
export type GetProfileInfoQueryResult = ApolloReactCommon.QueryResult<
  GetProfileInfoQuery,
  GetProfileInfoQueryVariables
>;
export const GetUsersInfoDocument = gql`
  query getUsersInfo($id: String!) {
    users_by_pk(id: $id) {
      name
      avatar
    }
  }
`;

/**
 * __useGetUsersInfoQuery__
 *
 * To run a query within a React component, call `useGetUsersInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersInfoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUsersInfoQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetUsersInfoQuery, GetUsersInfoQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetUsersInfoQuery, GetUsersInfoQueryVariables>(GetUsersInfoDocument, baseOptions);
}
export function useGetUsersInfoLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUsersInfoQuery, GetUsersInfoQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetUsersInfoQuery, GetUsersInfoQueryVariables>(
    GetUsersInfoDocument,
    baseOptions,
  );
}
export type GetUsersInfoQueryHookResult = ReturnType<typeof useGetUsersInfoQuery>;
export type GetUsersInfoLazyQueryHookResult = ReturnType<typeof useGetUsersInfoLazyQuery>;
export type GetUsersInfoQueryResult = ApolloReactCommon.QueryResult<GetUsersInfoQuery, GetUsersInfoQueryVariables>;
export const GetUsersAvatarDocument = gql`
  query getUsersAvatar($id: String!) {
    users(where: { id: { _eq: $id } }) {
      avatar
    }
  }
`;

/**
 * __useGetUsersAvatarQuery__
 *
 * To run a query within a React component, call `useGetUsersAvatarQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersAvatarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersAvatarQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUsersAvatarQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetUsersAvatarQuery, GetUsersAvatarQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetUsersAvatarQuery, GetUsersAvatarQueryVariables>(
    GetUsersAvatarDocument,
    baseOptions,
  );
}
export function useGetUsersAvatarLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUsersAvatarQuery, GetUsersAvatarQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetUsersAvatarQuery, GetUsersAvatarQueryVariables>(
    GetUsersAvatarDocument,
    baseOptions,
  );
}
export type GetUsersAvatarQueryHookResult = ReturnType<typeof useGetUsersAvatarQuery>;
export type GetUsersAvatarLazyQueryHookResult = ReturnType<typeof useGetUsersAvatarLazyQuery>;
export type GetUsersAvatarQueryResult = ApolloReactCommon.QueryResult<
  GetUsersAvatarQuery,
  GetUsersAvatarQueryVariables
>;
export const GetUsersEditableInfoDocument = gql`
  query getUsersEditableInfo($id: String!) {
    users(where: { id: { _eq: $id } }) {
      name
      avatar
      description
    }
  }
`;

/**
 * __useGetUsersEditableInfoQuery__
 *
 * To run a query within a React component, call `useGetUsersEditableInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersEditableInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersEditableInfoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUsersEditableInfoQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetUsersEditableInfoQuery, GetUsersEditableInfoQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetUsersEditableInfoQuery, GetUsersEditableInfoQueryVariables>(
    GetUsersEditableInfoDocument,
    baseOptions,
  );
}
export function useGetUsersEditableInfoLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUsersEditableInfoQuery, GetUsersEditableInfoQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetUsersEditableInfoQuery, GetUsersEditableInfoQueryVariables>(
    GetUsersEditableInfoDocument,
    baseOptions,
  );
}
export type GetUsersEditableInfoQueryHookResult = ReturnType<typeof useGetUsersEditableInfoQuery>;
export type GetUsersEditableInfoLazyQueryHookResult = ReturnType<typeof useGetUsersEditableInfoLazyQuery>;
export type GetUsersEditableInfoQueryResult = ApolloReactCommon.QueryResult<
  GetUsersEditableInfoQuery,
  GetUsersEditableInfoQueryVariables
>;
export const GetUnfollowingUsersDocument = gql`
  query getUnfollowingUsers($id: String!) {
    users(where: { followsByFollowingId: { _not: { following_id: { _eq: $id } } } }, limit: 20) {
      id
      avatar
      name
    }
  }
`;

/**
 * __useGetUnfollowingUsersQuery__
 *
 * To run a query within a React component, call `useGetUnfollowingUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUnfollowingUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUnfollowingUsersQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUnfollowingUsersQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetUnfollowingUsersQuery, GetUnfollowingUsersQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetUnfollowingUsersQuery, GetUnfollowingUsersQueryVariables>(
    GetUnfollowingUsersDocument,
    baseOptions,
  );
}
export function useGetUnfollowingUsersLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUnfollowingUsersQuery, GetUnfollowingUsersQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetUnfollowingUsersQuery, GetUnfollowingUsersQueryVariables>(
    GetUnfollowingUsersDocument,
    baseOptions,
  );
}
export type GetUnfollowingUsersQueryHookResult = ReturnType<typeof useGetUnfollowingUsersQuery>;
export type GetUnfollowingUsersLazyQueryHookResult = ReturnType<typeof useGetUnfollowingUsersLazyQuery>;
export type GetUnfollowingUsersQueryResult = ApolloReactCommon.QueryResult<
  GetUnfollowingUsersQuery,
  GetUnfollowingUsersQueryVariables
>;
export const NotifyNewPostsDocument = gql`
  subscription notifyNewPosts($userId: String!) {
    posts(
      order_by: { created_at: desc }
      limit: 10
      where: {
        _or: [{ user: { followsByFollowerId: { following_id: { _eq: $userId } } } }, { user_id: { _eq: $userId } }]
      }
    ) {
      id
      image
      caption
      created_at
      likes(where: { user_id: { _eq: $userId } }) {
        id
      }
      user {
        id
        avatar
        name
      }
      comments {
        id
        user {
          name
        }
        comment
      }
    }
  }
`;

/**
 * __useNotifyNewPostsSubscription__
 *
 * To run a query within a React component, call `useNotifyNewPostsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNotifyNewPostsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotifyNewPostsSubscription({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useNotifyNewPostsSubscription(
  baseOptions?: ApolloReactHooks.SubscriptionHookOptions<
    NotifyNewPostsSubscription,
    NotifyNewPostsSubscriptionVariables
  >,
) {
  return ApolloReactHooks.useSubscription<NotifyNewPostsSubscription, NotifyNewPostsSubscriptionVariables>(
    NotifyNewPostsDocument,
    baseOptions,
  );
}
export type NotifyNewPostsSubscriptionHookResult = ReturnType<typeof useNotifyNewPostsSubscription>;
export type NotifyNewPostsSubscriptionResult = ApolloReactCommon.SubscriptionResult<NotifyNewPostsSubscription>;
