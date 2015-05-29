module AuthenticationConcern

  def current_user
    @current_user ||= User.find(session[:id]) if session[:id]
  end

  def logout
    session.clear
  end

  def login(user)
    session[:id] = user.id
    session[:name] = user.name
  end

  def passwords_match?
    params[:user][:password] == params[:user][:password_again]
  end

end