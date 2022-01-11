

import { singIn } from "../client/blog-user.js"

export async function login(username, password) {


    await singIn(username, password);
    
  console.log ('sing in from authservice')
}