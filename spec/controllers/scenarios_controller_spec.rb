describe ScenariosController do
  let(:system) { FactoryGirl.create :system}
  let!(:scenario) { FactoryGirl.create :scenario }
  let(:scene) { FactoryGirl.create :scene }
  let(:aspect) {FactoryGirl.create :aspect}
  describe '#index' do
    it "renders a json blob containing scenarios associated with a given system" do
      get :index, system_id: system.id
      response_scenario = JSON.parse(response.body).first
      expect(response_scenario["name"]).to eq(scenario.name)
    end
    it "responds with a 200" do
      expect(response.status).to eq(200)
    end
  end
end
