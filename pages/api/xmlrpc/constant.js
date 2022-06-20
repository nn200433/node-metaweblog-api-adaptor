/**
 * 获取博客信息
 * @type {string}
 */
const METAWEBLOG_GET_USERS_BLOGS = "blogger.getUsersBlogs"
const METAWEBLOG_GET_CATEGORIES = "metaWeblog.getCategories"
const METAWEBLOG_NEW_POST = "metaWeblog.newPost"
const METAWEBLOG_EDIT_POST = "metaWeblog.editPost"
const METAWEBLOG_GET_POST = "metaWeblog.getPost"
const METAWEBLOG_GET_RECEBT_POSTS = "metaWeblog.getRecentPosts"

const FAULT_CODE_NO_METHOD_NAME = "0000"
const FAULT_CODE_ARGUEMENT_ERROR = "0001"
const FAULT_GET_USERS_BLOGS_ERROR = "1000"


const API_CONSTANTS = {
    METAWEBLOG_GET_USERS_BLOGS: METAWEBLOG_GET_USERS_BLOGS,
    METAWEBLOG_GET_CATEGORIES: METAWEBLOG_GET_CATEGORIES,
    METAWEBLOG_NEW_POST: METAWEBLOG_NEW_POST,
    METAWEBLOG_EDIT_POST: METAWEBLOG_EDIT_POST,
    METAWEBLOG_GET_POST: METAWEBLOG_GET_POST,
    METAWEBLOG_GET_RECEBT_POSTS: METAWEBLOG_GET_RECEBT_POSTS,
    FAULT_CODE_NO_METHOD_NAME,
    FAULT_CODE_ARGUEMENT_ERROR,
    FAULT_GET_USERS_BLOGS_ERROR
}

export default API_CONSTANTS