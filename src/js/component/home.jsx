import React from "react";
import NavBar from "./navbar.jsx";
import Card from "./card.jsx";
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	const styles = {
		width: "80%",
	};
	return (
		<div>
			<NavBar />
			<div className="container" style={styles}>
				<Jumbotron
					title="A Warm Welcome!"
					text="Something short and leading about the collection below—its
					contents, the creator, etc. Make it short and sweet, but not
					too short so folks don’t simply skip over it entirely."
				/>
				<div className="row">
					<div className="col-12 col-md-3">
						<Card
							title="Card title"
							text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti vitae iusto eos cupiditate."
							imageUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARcAAAC1CAMAAABCrku3AAAAM1BMVEXMzMyVlZXJycmXl5fGxsaampq1tbWtra2enp69vb3ExMTBwcGkpKS7u7vOzs6hoaGvr6/7m0snAAAEpUlEQVR4nO3Z2XLcOAwFUHGnxPX/v3YuSG1td+x5cFJW1T0PSSEtSwaaBEllWYiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi+obX+Y/TlT+k/RY+kDzO0PuSwHklZn3Nf/0eKCRcGv9V5yxEV+/YBD6F9mHqSpLZglDLRzw/TjMq3d1kzLlQmz8KUEbkwCqPL+YC/l8WPq7apXUFONhgTm1Nu5PAafWHLysUWjcoyKFIbkTJdywPyfn/j/346P2eLSH1YUZfVmbAmH2eC5YjCN3PAO4cLMUwMiqu7cR1RUxFDsG55f0D+ftj9Iim2kgbkrrtqaanaG5ckQZVnFFP96h4YV2FbKu5l+igEZlCVqmKE1NTi/gD7r3L6CasLug4IbENic3L1ij/H0K82Gn/W5eyftz6asptzJMg4W2Nc5cd0lnFW15jt+YDnKOgC56+cXJQus1QkWCVaR4QEj8ulTY+CrCGcXSfNSizVS12Ka/OTLlEtcRT+X+XzUzzGhLYy7mE1bcwYJNiQoMlHlPV1vfQQTBaVz3mR9hrNCz2WpXnpqIt3XZ8PeAzdXfcttpmY31faWky0EtkZqWj3tGR5abimGHdro3NOyWeYhlvZNzx99Gvv/PWAx9DBRCeL6BgoUgn515qMkbrMKVOTcvb8uosxXSoQ7OsIQD8Ko10fsR1dGIWfD5hz8inQHJXsUbD1QJ5eHZWQuvS3dUG3iRuWqPXDjUJ0GEPXZbizWxcp1v6Atj2oMDqqht9eNra97iMfSW1GbbdImSsnqVme69aNLGFGuWvrhgYk10gjamWUZ2zznsKGsd0abWO5xstmzK0uGC/37xop7v35Rvse4tl0dGmonpYddMcD6nhAftSAmV9i9aOjvMwjr97NI4RRuf7pRliKU94ni/U4PHRd7w8oD+swU00OM+dcgVbj3q9Hy5wy7u1ZB+UcHWaTc5X/sDJbd+s+jzHrcu1YTHzZv7R7a/DopPm+GqWS5ud67Ixtxxz6dBiy8Ul1QUrj74oTo63nDhf7XTki3KNDxUmzufuA0d4di/aoi8dxM90eMGu27XvpZzhSwghx+jwRYY3F+WiLbkZyWjp/onYVS5YT5XWTYzs45grOjdeH2sf5Ggaj71Ov/sXQDYuc6WS5QAWCLBrjKIyRIpGtY297265huHRdMGCuqYWT4lhz0KljWgomzFKPo2JxcV+PXufeL4csc7F2DePYM964bLa04/2L61c0oVgxYTsi254DNietWJ26wwomryX8OiU5a8sDNDZI73v1L4U0Tcw5mrmvx7BxTaLRCrYjuhZYHI+V5IcC3rZp6Ci4SXNSMo2uG3c4SY8Qn5nbOfMJtvEuVqn9DJzma80953WPrsulcJIfBkx8GTDjQplA53tLuam+PmvPOjjKK3/nsj++zIRzTj57x2s0rvZz8Gze3xLVJUcXxyqkV38q5wOaf9RogSqvX17+x+geaUQv3fJ8xfThVZNcOHdy9ea44/HZs3xI8auIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIg++g+kyC9z+4cgJAAAAABJRU5ErkJggg=="
						/>
					</div>
					<div className="col-12 col-md-3">
						<Card
							title="Card title"
							text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti vitae iusto eos cupiditate quae."
							imageUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARcAAAC1CAMAAABCrku3AAAANlBMVEXMzMyUlJTPz8+SkpLLy8umpqbIyMiYmJjExMSXl5efn5+cnJyioqLCwsKwsLC0tLS5ubmxsbGQjkfaAAAEV0lEQVR4nO3Za3OkKhCAYQFRAS/M//+z2w3oMLlMtuqc2opV7/NhN4yOxrZpWjMMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC8Z8V3ox++Zl9G//cv9o/ZUxtnH/12bhyPNe7LXxxleqzR5/Fl9M0J7sHuvinBGL1RuV7EtOog5B8vaUm6o1unMtrKyPivTnAbs6mc/trWt1HJkdfRG2NsO5ZQTKkd8VE2nttcfnuMX2ZMfVw2Y9bJ5mBWW0e+jPz7hLHZmX2yi2RX1gQx5iFfSyZo+oz3jMsS0jAWQ7mkNOl1GqeX5E2UT+1hzPT2GHatcRyC2a1GWv4d7GLMYTV7wnid4D62PhnsXC5FL03/byOZF88Kc9XPro7qDuUjr/FZQtjaSA+9hHiviltlt3cX6Fph2bVSLK7miV7guYf1fi83fuvq6DKbGolsJAbZzFM7iGbR9tMs/JXs4Y7nIrq5VC8pu3WUkMWx7bN2+5fkkaoRr4mxpPa1h8Ygu7l9rcRFA3+7VVpuqtuO2aWSBDUcSgI0PsORXXp+I5o06p6uW3bbVduolWU56qzTpLMSK5ePJCeYbhUZmSN1vZgXvd+uTRiZUFOdTEom1JUbMlek6ki6fJwddph2E5byUzHOGqXrBOFW7YuVZTrEKE1MLMnTrrbG5Sw9fVx0lQq6RH3oaayPyczbM1jSIWqUrLaGUbaZ9H5R+12s/L6brKneaJ3ZzywYnZvkTu9nlFwXF+lq9mT2j+kSnCTdc92apCfch7LEzXmwOnzcaCaNa6z3OJr1L/NF+7a25PTy4cP1AGH1UaAca/T1BNZ3hfoGzpKpq+uzonxfX3RjCLWx+XSkUpPVLsnTgnquRFstPndTInE81yOJ0lWFt349EsmYrx8lt1AaGX34nD/uMRpzq8p7kpZOVt9WHLV1sV/1L0qKrnn5YMvnFdfGVybaunwMnL1VXJatJbfmi0yYcLaqXtOkH12k60+hTxgpRKmNNC66kq/Pnu86wZ3iIpdU77xcjKSKbRNkXMviIY/AZRT7cqJld1pNP7Okw23letZ8uarMUFqitud2q4Vaym3N+KQ5oYvGoKuJcXqXfZkuev+7iikPQw/ZoQ/V1tJHngOkLMm2ro3J0tCVbfF17v1yk5aC2r9oZdDeZNRFtkyMrC2IjronYgmdrtHStHVLlGSIHGQ8dG2Wni9tS1O63igNkvTC7ufXfr+HvpKb45raqzbtTuM6m/beIPajaqsL8Ga6zk4zKqx6EGn2ZZ6FuQry3KjTrp5gvVP7cr1Oa03XUl9rtvaujbre1kZXWzrv+jJ6vvDU13WrM+cbupJnbdudqosapal36TiHkw8uXa/yF+lhU//+cXq0p+XpOPoH6hyNm30pVfm41G8eeoL9Vtmi7Ls//Xx6c3INP33evcl7/cvIDf9KAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA/+wPDOR+4aWGyLwAAAABJRU5ErkJggg=="
						/>
					</div>
					<div className="col-12 col-md-3">
						<Card
							title="Card title"
							text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti vitae iusto eos."
							imageUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARcAAAC1CAMAAABCrku3AAAANlBMVEXMzMyUlJTPz8+SkpLLy8umpqbIyMiYmJjExMSXl5efn5+cnJyioqLCwsKwsLC0tLS5ubmxsbGQjkfaAAAEV0lEQVR4nO3Za3OkKhCAYQFRAS/M//+z2w3oMLlMtuqc2opV7/NhN4yOxrZpWjMMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC8Z8V3ox++Zl9G//cv9o/ZUxtnH/12bhyPNe7LXxxleqzR5/Fl9M0J7sHuvinBGL1RuV7EtOog5B8vaUm6o1unMtrKyPivTnAbs6mc/trWt1HJkdfRG2NsO5ZQTKkd8VE2nttcfnuMX2ZMfVw2Y9bJ5mBWW0e+jPz7hLHZmX2yi2RX1gQx5iFfSyZo+oz3jMsS0jAWQ7mkNOl1GqeX5E2UT+1hzPT2GHatcRyC2a1GWv4d7GLMYTV7wnid4D62PhnsXC5FL03/byOZF88Kc9XPro7qDuUjr/FZQtjaSA+9hHiviltlt3cX6Fph2bVSLK7miV7guYf1fi83fuvq6DKbGolsJAbZzFM7iGbR9tMs/JXs4Y7nIrq5VC8pu3WUkMWx7bN2+5fkkaoRr4mxpPa1h8Ygu7l9rcRFA3+7VVpuqtuO2aWSBDUcSgI0PsORXXp+I5o06p6uW3bbVduolWU56qzTpLMSK5ePJCeYbhUZmSN1vZgXvd+uTRiZUFOdTEom1JUbMlek6ki6fJwddph2E5byUzHOGqXrBOFW7YuVZTrEKE1MLMnTrrbG5Sw9fVx0lQq6RH3oaayPyczbM1jSIWqUrLaGUbaZ9H5R+12s/L6brKneaJ3ZzywYnZvkTu9nlFwXF+lq9mT2j+kSnCTdc92apCfch7LEzXmwOnzcaCaNa6z3OJr1L/NF+7a25PTy4cP1AGH1UaAca/T1BNZ3hfoGzpKpq+uzonxfX3RjCLWx+XSkUpPVLsnTgnquRFstPndTInE81yOJ0lWFt349EsmYrx8lt1AaGX34nD/uMRpzq8p7kpZOVt9WHLV1sV/1L0qKrnn5YMvnFdfGVybaunwMnL1VXJatJbfmi0yYcLaqXtOkH12k60+hTxgpRKmNNC66kq/Pnu86wZ3iIpdU77xcjKSKbRNkXMviIY/AZRT7cqJld1pNP7Okw23letZ8uarMUFqitud2q4Vaym3N+KQ5oYvGoKuJcXqXfZkuev+7iikPQw/ZoQ/V1tJHngOkLMm2ro3J0tCVbfF17v1yk5aC2r9oZdDeZNRFtkyMrC2IjronYgmdrtHStHVLlGSIHGQ8dG2Wni9tS1O63igNkvTC7ufXfr+HvpKb45raqzbtTuM6m/beIPajaqsL8Ga6zk4zKqx6EGn2ZZ6FuQry3KjTrp5gvVP7cr1Oa03XUl9rtvaujbre1kZXWzrv+jJ6vvDU13WrM+cbupJnbdudqosapal36TiHkw8uXa/yF+lhU//+cXq0p+XpOPoH6hyNm30pVfm41G8eeoL9Vtmi7Ls//Xx6c3INP33evcl7/cvIDf9KAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA/+wPDOR+4aWGyLwAAAABJRU5ErkJggg=="
						/>
					</div>
					<div className="col-12 col-md-3">
						<Card
							title="Card title"
							text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti vitae iusto eos cupiditate quae."
							imageUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARcAAAC1CAMAAABCrku3AAAANlBMVEXMzMyUlJTPz8+SkpLLy8umpqbIyMiYmJjExMSXl5efn5+cnJyioqLCwsKwsLC0tLS5ubmxsbGQjkfaAAAEV0lEQVR4nO3Za3OkKhCAYQFRAS/M//+z2w3oMLlMtuqc2opV7/NhN4yOxrZpWjMMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC8Z8V3ox++Zl9G//cv9o/ZUxtnH/12bhyPNe7LXxxleqzR5/Fl9M0J7sHuvinBGL1RuV7EtOog5B8vaUm6o1unMtrKyPivTnAbs6mc/trWt1HJkdfRG2NsO5ZQTKkd8VE2nttcfnuMX2ZMfVw2Y9bJ5mBWW0e+jPz7hLHZmX2yi2RX1gQx5iFfSyZo+oz3jMsS0jAWQ7mkNOl1GqeX5E2UT+1hzPT2GHatcRyC2a1GWv4d7GLMYTV7wnid4D62PhnsXC5FL03/byOZF88Kc9XPro7qDuUjr/FZQtjaSA+9hHiviltlt3cX6Fph2bVSLK7miV7guYf1fi83fuvq6DKbGolsJAbZzFM7iGbR9tMs/JXs4Y7nIrq5VC8pu3WUkMWx7bN2+5fkkaoRr4mxpPa1h8Ygu7l9rcRFA3+7VVpuqtuO2aWSBDUcSgI0PsORXXp+I5o06p6uW3bbVduolWU56qzTpLMSK5ePJCeYbhUZmSN1vZgXvd+uTRiZUFOdTEom1JUbMlek6ki6fJwddph2E5byUzHOGqXrBOFW7YuVZTrEKE1MLMnTrrbG5Sw9fVx0lQq6RH3oaayPyczbM1jSIWqUrLaGUbaZ9H5R+12s/L6brKneaJ3ZzywYnZvkTu9nlFwXF+lq9mT2j+kSnCTdc92apCfch7LEzXmwOnzcaCaNa6z3OJr1L/NF+7a25PTy4cP1AGH1UaAca/T1BNZ3hfoGzpKpq+uzonxfX3RjCLWx+XSkUpPVLsnTgnquRFstPndTInE81yOJ0lWFt349EsmYrx8lt1AaGX34nD/uMRpzq8p7kpZOVt9WHLV1sV/1L0qKrnn5YMvnFdfGVybaunwMnL1VXJatJbfmi0yYcLaqXtOkH12k60+hTxgpRKmNNC66kq/Pnu86wZ3iIpdU77xcjKSKbRNkXMviIY/AZRT7cqJld1pNP7Okw23letZ8uarMUFqitud2q4Vaym3N+KQ5oYvGoKuJcXqXfZkuev+7iikPQw/ZoQ/V1tJHngOkLMm2ro3J0tCVbfF17v1yk5aC2r9oZdDeZNRFtkyMrC2IjronYgmdrtHStHVLlGSIHGQ8dG2Wni9tS1O63igNkvTC7ufXfr+HvpKb45raqzbtTuM6m/beIPajaqsL8Ga6zk4zKqx6EGn2ZZ6FuQry3KjTrp5gvVP7cr1Oa03XUl9rtvaujbre1kZXWzrv+jJ6vvDU13WrM+cbupJnbdudqosapal36TiHkw8uXa/yF+lhU//+cXq0p+XpOPoH6hyNm30pVfm41G8eeoL9Vtmi7Ls//Xx6c3INP33evcl7/cvIDf9KAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA/+wPDOR+4aWGyLwAAAABJRU5ErkJggg=="
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
