describe ScenesController do
  let(:scenario) { FactoryGirl.create :scenario }
  let(:scene) { FactoryGirl.create :scene }
  let(:npc) { FactoryGirl.create :npc}
  describe '#index' do
    it "renders a json blob containing all scenes associated with a scenario" do
      get :index, "/scenarios/#{scenario.id}/scenes", scenario_id: scenario.id
      expect(response.body).to eq(Scene.all.to_json)
    end
    it "responds with a 200" do
      expect(response.status).to eq(200)
    end
  end
  describe '#update' do
    it 'associates an existing NPC with an existing scene' do
      put :update, "/scenes/#{scene.id}", {id: scene.id, names: [npc.name]}
      json_response = JSON.parse(response.body)
      expect(json_response[0]['name']).to eq(npc.name)
    end
  end
  xdescribe '#create' do
  end
end
