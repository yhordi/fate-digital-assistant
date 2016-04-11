describe UsersController do
  let(:user) { FactoryGirl.create :user }
  let(:user2) { FactoryGirl.build :user }
  describe '#new' do
    context 'a user who is not logged in' do
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

    context 'a logged in user' do
      it 'responds with a 302' do
        session[:id] = user.id
        get :new
      end
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

  describe '#edit' do
    before(:each) do
      get :edit, {id: user.id}
    end
    it "resposnds witha a status of 200" do
      expect(response.status).to eq(200)
    end
    it "renders the edit page" do
      expect(response).to render_template(:edit)
    end
  end

  describe "PUT #update" do
      let!(:pass) { "newPassword" }
      let!(:old_salt) { user.password_digest }
      it "updates a user's password with valid params" do
        put :update, id: user.id, old_password: user.password, user: { password: pass }, password_again: pass
        expect(user.reload.password_digest).to_not eq(old_salt)
      end
      it "does not update a user's password if the original password is incorrect" do
        put :update, id: user.id, old_password: "blarnz", user: { password: pass }, password_again: pass
        expect(user.reload.password_digest).to eq(user.password_digest)
      end
      it "does not update a user's password it the new password fields do not match" do
        put :update, id: user.id, old_password: user.password, user: {password: "crabula"}, password_again: "crabuloid"
        expect(user.reload.password_digest).to eq(user.password_digest)
      end
      it "updates a user's profile pic" do
        file = fixture_file_upload('files/howbybowby.png', 'image/png')
        put :update, id: user.id, upload: file, user: { avatar: file }
        expect(user.reload.avatar_file_name).to eq('howbybowby.png')
      end
    end
end
