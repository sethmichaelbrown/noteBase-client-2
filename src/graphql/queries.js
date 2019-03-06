// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    noteBases {
      items {
        id
        title
        code
        text
      }
      nextToken
    }
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      noteBases {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getNote = `query GetNote($id: ID!) {
  getNote(id: $id) {
    id
    title
    code
    text
    notes {
      id
      title
      code
      text
      notes {
        id
        title
        code
        text
      }
      comments {
        nextToken
      }
    }
    comments {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`;
export const listNotes = `query ListNotes(
  $filter: ModelNoteFilterInput
  $limit: Int
  $nextToken: String
) {
  listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      code
      text
      notes {
        id
        title
        code
        text
      }
      comments {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    content
    post {
      id
      title
      code
      text
      notes {
        id
        title
        code
        text
      }
      comments {
        nextToken
      }
    }
  }
}
`;
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      post {
        id
        title
        code
        text
      }
    }
    nextToken
  }
}
`;
export const searchNotes = `query SearchNotes(
  $filter: SearchableNoteFilterInput
  $sort: SearchableNoteSortInput
  $limit: Int
  $nextToken: Int
) {
  searchNotes(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      code
      text
      notes {
        id
        title
        code
        text
      }
      comments {
        nextToken
      }
    }
    nextToken
  }
}
`;
