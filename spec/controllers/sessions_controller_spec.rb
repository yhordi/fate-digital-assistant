describe SessionsController do
  include AuthenticationConcern
  let(:user) { FactoryGirl.create :user }
  context '#create' do
    context 'with good params' do
      before(:each) do
        post :create, {name: user.name, password: user.password}
      end
      it 'redirects to the root' do
        expect(response.status).to eq(302)
      end
      it 'creates a new user session' do
        expect(session[:id]).to eq(user.id)
      end
    end
    context 'with bad params' do
      before(:each) do
        post :create
      end
      it 'redirects to the root' do
        expect(response.status).to eq(302)
      end
      it 'sends an error to the view in a flash message' do
        expect(session[:flash]["flashes"]["error"]).to eq("Incorrect user name or password. Please try again.")
      end
    end
  end
  context '#destroy' do
    it 'redirects to the root path' do
      post :create, { name: user.name, password: user.password }
      delete :destroy, id: session[:id]
      expect(response.status).to eq(302)
    end
  end
  context '#show' do
    it 'assigns the @user instance variable to current_user' do
      post :create, { name: user.name, password: user.password }
      get :show, id: session[:id]
      expect(assigns(:user)).to eq(current_user)
    end
  end
end