module AuthenticationConcern

  def current_user
    @current_user ||= User.find(session[:id]) if session[:id]
  end

  def logout
    session.clear
  end

  def login(user)
    session[:id] = user.id
    session[:username] = user.username
  end

end