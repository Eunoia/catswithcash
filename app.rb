require 'sinatra'

def separate_comma(number)
  number.to_s.chars.to_a.reverse.each_slice(3).map(&:join).join(",").reverse
end
def generate_cat_attributes_hash(cat)
	{
		:"id" => cat[:donarID],
		:"class" => cat[:kittens] ? "has_kittens" : "no_kittens",
		:"data-legacy" => cat[:legacy] ? "yes" : "no",
		:"data-donations" => cat[:donations],
		:"data-networth" => cat[:networth]
	}
end
def cats
	@cats = [{:name=>"Felix", :img=>"tumblr_mfxky7atAX1qgn992o1_500.jpg", :kittens=>false, :height=>158, :legacy=>false, :donations=>"0", :networth=>439676101, :donarID=>50}, {:name=>"Max", :img=>"tumblr_muqiz8yYrP1qgn992o1_500.jpg", :kittens=>true, :height=>169, :legacy=>false, :donations=>"0", :networth=>76842875, :donarID=>51}, {:name=>"Minou", :img=>"tumblr_mwjgalP0T61qgn992o1_500.jpg", :kittens=>false, :height=>257, :legacy=>false, :donations=>"0", :networth=>645297679, :donarID=>52}, {:name=>"Mimi", :img=>"tumblr_mx7ks2piTP1qgn992o1_500.jpg", :kittens=>true, :height=>206, :legacy=>true, :donations=>4572, :networth=>288890853, :donarID=>53}, {:name=>"Charlotte", :img=>"tumblr_mxmckdVRIV1qgn992o1_500.jpg", :kittens=>false, :height=>175, :legacy=>false, :donations=>"0", :networth=>348333531, :donarID=>54}, {:name=>"Lisa", :img=>"tumblr_mynditKo3v1qgn992o1_500.jpg", :kittens=>true, :height=>236, :legacy=>true, :donations=>9114, :networth=>99561444, :donarID=>55}, {:name=>"Tiger", :img=>"tumblr_mz401l9bn01qgn992o1_500.jpg", :kittens=>false, :height=>260, :legacy=>false, :donations=>"0", :networth=>604930721, :donarID=>56}, {:name=>"Smokey", :img=>"tumblr_mzdbul6ky91qgn992o1_500.jpg", :kittens=>false, :height=>164, :legacy=>true, :donations=>"0", :networth=>594105967, :donarID=>57}, {:name=>"Simba", :img=>"tumblr_mzu0b8VGI61qgn992o1_500.jpg", :kittens=>true, :height=>159, :legacy=>false, :donations=>"0", :networth=>539393418, :donarID=>58}, {:name=>"Patches", :img=>"tumblr_n037jcMnw21qgn992o1_500.jpg", :kittens=>true, :height=>157, :legacy=>false, :donations=>1667, :networth=>258901627, :donarID=>59}, {:name=>"Smudge", :img=>"tumblr_n0wtj2VEbD1qgn992o1_500.jpg", :kittens=>false, :height=>157, :legacy=>true, :donations=>"0", :networth=>453144939, :donarID=>60}, {:name=>"Poppy", :img=>"tumblr_n17ycdXsfb1qgn992o1_500.jpg", :kittens=>false, :height=>142, :legacy=>false, :donations=>"0", :networth=>538295755, :donarID=>61}, {:name=>"Ginger", :img=>"tumblr_n1zpyicdgx1qgn992o1_500.jpg", :kittens=>true, :height=>193, :legacy=>true, :donations=>"0", :networth=>365662763, :donarID=>62}, {:name=>"Oscar", :img=>"tumblr_n2nrpfjCN31qgn992o1_500.jpg", :kittens=>false, :height=>158, :legacy=>false, :donations=>"0", :networth=>69692393, :donarID=>63}, {:name=>"Brick", :img=>"tumblr_n30r0c73hp1qgn992o1_500.jpg", :kittens=>true, :height=>151, :legacy=>false, :donations=>"0", :networth=>445668107, :donarID=>64}, {:name=>"Six", :img=>"tumblr_n3docp2Ifn1qgn992o1_500.jpg", :kittens=>false, :height=>153, :legacy=>false, :donations=>"0", :networth=>58857131, :donarID=>65}, {:name=>"Sunkist", :img=>"tumblr_n3qmm8iKgw1qgn992o1_500.jpg", :kittens=>true, :height=>223, :legacy=>false, :donations=>1121, :networth=>598021880, :donarID=>66}, {:name=>"Bella", :img=>"tumblr_n45fpetErS1qgn992o1_500.png", :kittens=>true, :height=>160, :legacy=>false, :donations=>"0", :networth=>579143325, :donarID=>67}, {:name=>"Doctor Whiskers", :img=>"tumblr_n4rnv2S5rG1qgn992o1_500.jpg", :kittens=>true, :height=>177, :legacy=>false, :donations=>"0", :networth=>551849948, :donarID=>68}, {:name=>"Flapjack", :img=>"tumblr_n54mtoaWqM1qgn992o1_500.jpg", :kittens=>true, :height=>208, :legacy=>true, :donations=>"0", :networth=>674506047, :donarID=>69}, {:name=>"Lady Fluffington", :img=>"tumblr_n5lahg8CPs1qgn992o1_500.png", :kittens=>true, :height=>154, :legacy=>true, :donations=>7691, :networth=>243910462, :donarID=>70}, {:name=>"Christofur", :img=>"tumblr_n5wfzbnEdJ1qgn992o1_500.jpg", :kittens=>true, :height=>278, :legacy=>true, :donations=>609, :networth=>341066968, :donarID=>71}, {:name=>"Pico de Gato", :img=>"tumblr_n69e111rvS1qgn992o1_500.jpg", :kittens=>false, :height=>176, :legacy=>true, :donations=>"0", :networth=>30228537, :donarID=>72}, {:name=>"Mister Bigglesworth", :img=>"tumblr_n6mci97OQW1qgn992o1_500.jpg", :kittens=>false, :height=>239, :legacy=>false, :donations=>5947, :networth=>536346192, :donarID=>73}, {:name=>"James and Sissy", :img=>"tumblr_n72yxcvscI1qgn992o1_500.jpg", :kittens=>true, :height=>236, :legacy=>false, :donations=>"0", :networth=>164738610, :donarID=>74}]
end

get '/' do
	@cats = cats
	@cats.map! do |cat|
		cat[:data] = generate_cat_attributes_hash(cat)
		cat
	end
	erb :index
end
post '/work' do
	sleep 5
	cat = cats.select{ |c| c[:donarID].to_s==params[:donor] }[0]
	case params[:action]
	when 'buy_lunch'
		"The maitre\'d will seet you as soon as you can #{cat[:name]}} walk in."
	when 'send_email'
		"Your perfectly worded email will be read by #{cat[:name]} shortly."
	when 'send_gift'
		"#{cat[:name]} will appreciate the thoughtful gift you sent."
	when 'call_them'
		"Pick up your phone, #{cat[:name]} is calling."
	when 'order_tickets'
		"Your airplane to visit #{cat[:name]} is pulling up shortly"
	end
end