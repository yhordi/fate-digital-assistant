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
    context 'with no username' do
      before(:each) do
        post :create
      end
      it 'redirects to the root' do
        expect(response.status).to eq(302)
      end
      it 'sends an error to the view in a flash message' do
        expect(session[:flash]["flashes"]["error"]).to eq("That username does not exist.")
      end
    end
    context 'with an incorrect password' do
      before(:each) do
        post :create, name: user.name
      end
      it 'sends an error to the view in a flash message' do
        expect(session[:flash]["flashes"]["error"]).to eq("That password is invaid.")
      end
    end
  end
  describe '#destroy' do
    it 'redirects to the root path' do
      post :create, { name: user.name, password: user.password }
      delete :destroy, id: session[:id]
      expect(response.status).to eq(302)
    end
  end
  describe '#show' do
    it 'assigns the @user instance variable to current_user' do
      post :create, { name: user.name, password: user.password }
      get :show, id: session[:id]
      expect(assigns(:user)).to eq(current_user)
    end
  end
end
