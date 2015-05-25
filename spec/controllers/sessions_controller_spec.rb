describe SessionsController do
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
end