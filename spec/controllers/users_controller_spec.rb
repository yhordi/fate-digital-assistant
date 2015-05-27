describe UsersController do
  let(:user) { FactoryGirl.create :user }
  context '#new' do
    before(:each) do
      get :new
    end
    it "assigns the @user instance variable to a new user" do
      expect(assigns(:user)).to be_a_new(User)
    end
    it "responds with a 200" do
      expect(response.status).to eq(200)
    end
  end
  context '#show' do
    before(:each) do
      session[:id] = user.id
      get :show, {id: user.id}
    end
    it "assigns the @user instance variable to be a specific user" do
      expect(assigns(:user).id).to eq(user.id)
    end
  end
end