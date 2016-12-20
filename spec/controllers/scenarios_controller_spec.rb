describe ScenariosController do
  let(:system) { FactoryGirl.create :system}
  let!(:scenario) { FactoryGirl.create :scenario }
  let!(:scene) { FactoryGirl.create :scene }
  let(:aspect) {FactoryGirl.create :aspect}
  describe '#index' do
    describe 'renders a json blob' do
      let(:response_scenario) {JSON.parse(response.body).first}
      before(:each) do
        get :index, system_id: system.id
      end
      it "that contains scenarios associated with a given system" do
        expect(response_scenario["name"]).to eq(scenario.name)
      end

      it 'that contains scenes associated with a given scenario' do
        expect(response_scenario["scenes"].first["name"]).to eq(scene.name)
      end
    end
    it "responds with a 200" do
      expect(response.status).to eq(200)
    end
  end
end
