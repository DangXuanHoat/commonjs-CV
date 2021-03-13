export const index =(request,response)=>{
    return response.status(200).render('page/login-page',{layout:'layouts/auth-layout'})

}