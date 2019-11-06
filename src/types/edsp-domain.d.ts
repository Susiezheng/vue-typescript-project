declare module 'edsp-domain' {

  export interface EdspDomain {
    id?: number;
    gmtCreate?: number;
    gmtModified?: number;
    tagDTOSet?: TagDTOSet[];
    name?: string;
    code?: string;
    token?: string;
    uri?: string;
    tagNames?: string[];
  }

  export interface TagDTOSet {
    id?: number;
    gmtCreate?: number;
    gmtModified?: number;
    name?: string;
  }
}

