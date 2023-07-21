export interface GetUsersResult<DT> {
  search: Search<DT>;
}

export interface Search<DT> {
  edges: Edge<DT>[];
}

export interface Edge<DT> {
  node: DT;
}
