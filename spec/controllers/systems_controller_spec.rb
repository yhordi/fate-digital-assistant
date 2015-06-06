describe SystemsController do
  let(:user) { FactoryGirl.create :user }
  let(:system) {FactoryGirl.build :system }
  describe '#index' do
    before(:each) do
      get :index
    end
    it 'responds with a 200' do
      expect(response.status).to eq(200)
    end
    it 'assigns the @systems instance variable' do
      expect(assigns(:systems)).to be_a(ActiveRecord::Relation)
    end
  end
  describe '#create' do
    context 'on valid params' do
      before(:each) do
        post :create, {system: {name: system.name, description: system.description}}
      end
      it 'saves a new system to the database' do
        expect(System.last.name).to eq(system.name)
      end
      it 'renders a json object containing the saved system info' do
        expect(response.body).to eq(System.last.to_json)
      end
    end
    context 'on invalid params' do
      it "repsonds with an error" do
        post :create, { system: {} }
        expect(flash[:error]).to be_present
      end
    end
  end
end