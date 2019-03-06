// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateNote = `subscription OnCreateNote {
  onCreateNote {
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
export const onUpdateNote = `subscription OnUpdateNote {
  onUpdateNote {
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
export const onDeleteNote = `subscription OnDeleteNote {
  onDeleteNote {
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
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
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
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
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
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
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
