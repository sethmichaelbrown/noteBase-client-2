// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
export const createNote = `mutation CreateNote($input: CreateNoteInput!) {
  createNote(input: $input) {
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
export const updateNote = `mutation UpdateNote($input: UpdateNoteInput!) {
  updateNote(input: $input) {
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
export const deleteNote = `mutation DeleteNote($input: DeleteNoteInput!) {
  deleteNote(input: $input) {
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
export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
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
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
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
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
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
