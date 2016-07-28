describe CharacterSkill do
  let(:physique) { CharacterSkill.new(name: 'Physique', level: 0)}
  let(:will) { CharacterSkill.new(name: 'Will', level: 0)}

  it {is_expected.to validate_presence_of :name}
  describe '#calculate_max_stress' do
    levels = [
         {input: 0, output: 2},
         {input: 1, output: 3},
         {input: 2, output: 4},
         {input: 3, output: 4},
         {input: 4, output: 4},
         {input: 5, output: 5},
         {input: 6, output: 5},
       ]
    levels.each do |level|
      it "returns #{level[:input]} based on a physique level of #{level[:output]}" do
        physique.level = level[:input]
        expect(physique.calculate_max_stress).to eq(level[:output])
      end
      it "returns #{level[:input]} based on a will level of #{level[:output]}" do
        will.level = level[:input]
        expect(will.calculate_max_stress).to eq(level[:output])
      end
    end
  end
end
