describe SystemsController do
  let(:user) { FactoryGirl.create :user }
  let(:saved_system) { FactoryGirl.create :system }
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
      it 'responds with a json object containing the saved system info' do
        expect(response.body).to eq(System.last.to_json)
      end
    end
    context 'on invalid params' do
      it "responds with a json object containing ActiveRecord Validation errors" do
        post :create, { system: {} }
        expect(response.body).to eq(assigns(:system).errors.full_messages.to_json)
      end
    end
  end
  describe '#new' do
    before(:each) do
      get :new
    end
    it 'assigns the @system instance variable as a new system' do
      expect(assigns(:system)).to be_a_new(System)
    end
    it 'renders the _new partial' do
      expect(response).to render_template(partial: 'systems/_new')
    end
  end
  describe '#show' do
    before(:each) do
      session[:id] = user.id
      get :show, {id: saved_system.id}
    end
    it 'assigns the @system instance variable as a specific system' do
      expect(assigns(:system)).to eq(saved_system)
    end
    it 'renders the _show partial' do
      expect(response).to render_template(partial: 'systems/_show')
    end
  end
  describe '#update' do
    it 'updates the attributes of a saved system' do
      patch :update, {system: {name: "Fighting Time", description: saved_system.description}, id: saved_system.id}
      expect(System.last.name).to eq('Fighting Time')
    end
    context 'with unchanged data' do
      before(:each) do
         patch :update, {system: {name: saved_system.name, description: saved_system.description}, id: saved_system.id}
      end
      it 'assigns the @system instance variable as a specific system' do
        expect(assigns(:system)).to eq(saved_system)
      end
      it 'responds with a JSON object containing the updated system info' do
        expect(response.body).to eq(System.last.to_json)
      end
    end
  end
end