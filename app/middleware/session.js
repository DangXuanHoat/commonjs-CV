
export  function  isAuth(request, response,next){
    const session = request.session.User
    if(session){
        next()
    }else{
      return response.redirect('/page')
    }

}
export function destroy(request, response){
    req.session.destroy(function(err) {
        return response.redirect('/page')
    })
}