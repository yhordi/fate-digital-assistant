describe UsersController do
  let(:user) { FactoryGirl.create :user }
  let(:user2) { FactoryGirl.build :user }
  describe '#new' do

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

  describe '#show' do

    before(:each) do
      session[:id] = user.id
      get :show, {id: user.id}
    end

    it "assigns the @user instance variable to be a specific user" do
      expect(assigns(:user).id).to eq(user.id)
    end
    it "resposnds witha a status of 200" do
      expect(response.status).to eq(200)
    end
  end

  describe '#create' do
    context "on good params" do
      it 'saves a new user to the database' do
        expect{post :create, {user: {name: user2.name, password: user2.password, password_again: user2.password}}}.to change{User.count}.by(1)
      end
      it 'responds with a status of 302' do
        post :create, {user: {name: user2.name, password: user2.password, password_again: user2.password}}
        expect(response.status).to eq(302)
      end
    end
    context "on bad params" do

      before (:each) do
        post :create, {user:{}}
      end
      
      it "responds with a status of 302" do
        expect(response.status).to eq(302)
      end
      it "repsonds with an error" do
        expect(flash[:error]).to be_present
      end
    end
  end
end