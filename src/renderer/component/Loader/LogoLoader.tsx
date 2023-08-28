import React from "react";
import Styled, { useTheme } from "styled-components";

const Style = Styled.div`
.running {
  --animation-state: running;
}
.paused {
  --animation-state: running;
}
.loader-container {
    display: block;
    margin: 0 auto;
    --color-base: ${({ theme }) => theme.colors.purple300};
    &.loader-warning {
      --color-base: ${({ theme }) => theme.colors.brandWarning};
      .loader-rotating {
        opacity: 0.2;
      }
    }
    &.loader-error {
      --color-base: ${({ theme }) => theme.colors.brandPrimary};
      .loader-rotating {
        opacity: 0.2;
      }
    }
}
svg {
    overflow: visible;
    max-width: 100%;
}
.loader-piece {
    animation: loadingPieces 300ms linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-play-state: var(--animation-state);
}
@keyframes loadingPieces {
    to {
        opacity: 0.2;
    }
}
.piece2 {
    animation-delay: 100ms;
}
.piece3 {
    animation-delay: 200ms;
}
.fillShapeColor {
  fill: var(--color-base);
}
.strokeShapeColor {
  stroke: var(--color-base);
  stroke-opacity: 0.15;
}
.loader-base {
    animation: loadingScale 300ms linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    transform-origin: center;
    animation-play-state: var(--animation-state);
}

@keyframes loadingScale {
    to {
        transform: scale(0.9);
    }
}
.paused {
  .loader-piece {
    animation: resetOpacity 600ms linear;
    animation-iteration-count: 1;
    animation-direction: forwards;
  }
  .loader-base {
      animation: resetScale 600ms linear;
      animation-iteration-count: 1;
      animation-direction: forwards;
  }
}
@keyframes resetScale {
  to {
      transform: scale(1);
  }
}
@keyframes resetOpacity {
  to {
      opacity: 1;
  }
}
.loader-rotating {
    filter: drop-shadow(0px 4px 6px rgba(100, 135, 220, 0.5));
}
.rotating {
    transform-origin: 320% 300%;
	  animation: rotating 1s linear infinite;
    animation-play-state: var(--animation-state);
}
@keyframes rotating {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
`;

interface LogoLoaderProps {
  width?: string;
  warning?: boolean;
  error?: boolean;
  paused?: boolean;
}

const LogoLoader = ({ width = "52px", warning = false, error = false, paused = false }: LogoLoaderProps) => {
  const { neuronLoader } = useTheme().styles.neuronStatus;

  return (
    <Style>
      <div
        className={`loader-container ${warning ? "loader-warning" : ""} ${error ? "loader-error" : ""} ${
          paused ? "paused" : "running"
        }`}
        style={{ width: `${width}` }}
      >
        <svg width="50" height="52" viewBox="0 0 50 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g className="loader-rotating">
            <mask
              id="mask0_3994_257195"
              style={{
                maskType: "alpha",
              }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="50"
              height="52"
            >
              <path
                d="M38.4552 6.26758H37.7181C37.2267 6.26758 36.7353 6.26758 36.2439 6.26758C33.1725 6.38986 30.2241 7.00126 27.3984 7.85721L36.7353 11.281L38.9466 12.137L40.9123 12.8707L37.5953 27.2997C36.2439 33.6582 33.9097 39.7722 30.8383 45.2748L36.8581 38.4271L38.9466 36.1038L39.1923 35.8593L42.3865 32.3131C42.8779 31.824 43.2465 31.2126 43.3694 30.4789L44.475 26.8106L50.0034 8.59089C46.4407 7.12354 42.5094 6.38986 38.4552 6.26758Z"
                fill="#7879F1"
              />
              <path
                d="M7.49405 21.1849C7.98546 21.6741 8.35402 22.1632 8.84543 22.6523C9.82826 23.7528 10.8111 24.7311 11.9168 25.7093L10.6882 20.0844L10.1968 17.6388L9.09114 12.9922L25.0621 7.12279C28.5019 5.89999 32.3104 5.16631 36.2417 5.16631H36.4874C37.2245 5.16631 37.8388 5.16631 38.4531 5.16631C39.313 5.16631 40.2959 5.28859 41.1558 5.41087L38.3302 4.43264L35.996 3.57668L30.7133 1.74248L26.6591 0.275129C25.5535 -0.0917097 24.4478 -0.0917097 23.3421 0.275129L18.7965 1.86476L4.42272 7.00051L0 8.46786C1.71994 13.2368 4.29986 17.5166 7.49405 21.1849Z"
                fill="#7879F1"
              />
              <path
                d="M30.2236 34.8812L27.6437 36.96L24.9409 39.161L12.7785 29.1341C11.0585 27.6667 9.33857 26.0771 7.86433 24.3652C7.37292 23.876 7.00436 23.3869 6.51295 22.7755C4.91585 20.8191 3.56447 18.7403 2.33594 16.417L4.91585 24.8543L5.16156 25.8325L6.02153 28.645L6.51295 30.3569C6.75865 30.9683 7.00436 31.7019 7.49577 32.1911C7.98718 32.6802 8.60145 33.4139 9.33857 34.2698C9.82998 34.8812 10.4442 35.4926 11.0585 36.2263C16.3412 42.218 24.8181 51.8781 25.0638 52.0004C29.6093 45.7641 32.9264 38.6719 34.892 30.9683L30.2236 34.8812Z"
                fill="#7879F1"
              />
            </mask>
            <g mask="url(#mask0_3994_257195)">
              <rect x="-40" y="-40" transform="rotate(1 129 129)" width="129" height="129" fill="url(#prefix__pattern0)" />
            </g>
          </g>
          <g className="loader-base">
            <g className="loader-piece piece1">
              <path
                d="M38.4552 6.26758H37.7181C37.2267 6.26758 36.7353 6.26758 36.2439 6.26758C33.1725 6.38986 30.2241 7.00126 27.3984 7.85721L36.7353 11.281L38.9466 12.137L40.9123 12.8707L37.5953 27.2997C36.2439 33.6582 33.9097 39.7722 30.8383 45.2748L36.8581 38.4271L38.9466 36.1038L39.1923 35.8593L42.3865 32.3131C42.8779 31.824 43.2465 31.2126 43.3694 30.4789L44.475 26.8106L50.0034 8.59089C46.4407 7.12354 42.5094 6.38986 38.4552 6.26758Z"
                className="fillShapeColor"
              />
              <path
                d="M36.9158 10.8148L36.9158 10.8147L36.9074 10.8116L29.0137 7.91696C31.3521 7.2946 33.7647 6.86756 36.2539 6.76758H36.2554H36.2583H36.2611H36.264H36.2669H36.2698H36.2727H36.2755H36.2784H36.2813H36.2842H36.2871H36.2899H36.2928H36.2957H36.2986H36.3015H36.3043H36.3072H36.3101H36.313H36.3159H36.3187H36.3216H36.3245H36.3274H36.3302H36.3331H36.336H36.3389H36.3418H36.3446H36.3475H36.3504H36.3533H36.3562H36.359H36.3619H36.3648H36.3677H36.3706H36.3734H36.3763H36.3792H36.3821H36.385H36.3878H36.3907H36.3936H36.3965H36.3994H36.4022H36.4051H36.408H36.4109H36.4138H36.4166H36.4195H36.4224H36.4253H36.4281H36.431H36.4339H36.4368H36.4397H36.4425H36.4454H36.4483H36.4512H36.4541H36.4569H36.4598H36.4627H36.4656H36.4685H36.4713H36.4742H36.4771H36.48H36.4829H36.4857H36.4886H36.4915H36.4944H36.4973H36.5001H36.503H36.5059H36.5088H36.5117H36.5145H36.5174H36.5203H36.5232H36.526H36.5289H36.5318H36.5347H36.5376H36.5404H36.5433H36.5462H36.5491H36.552H36.5548H36.5577H36.5606H36.5635H36.5664H36.5692H36.5721H36.575H36.5779H36.5808H36.5836H36.5865H36.5894H36.5923H36.5952H36.598H36.6009H36.6038H36.6067H36.6095H36.6124H36.6153H36.6182H36.6211H36.6239H36.6268H36.6297H36.6326H36.6355H36.6383H36.6412H36.6441H36.647H36.6499H36.6527H36.6556H36.6585H36.6614H36.6643H36.6671H36.67H36.6729H36.6758H36.6787H36.6815H36.6844H36.6873H36.6902H36.6931H36.6959H36.6988H36.7017H36.7046H36.7074H36.7103H36.7132H36.7161H36.719H36.7218H36.7247H36.7276H36.7305H36.7334H36.7362H36.7391H36.742H36.7449H36.7478H36.7506H36.7535H36.7564H36.7593H36.7622H36.765H36.7679H36.7708H36.7737H36.7766H36.7794H36.7823H36.7852H36.7881H36.7909H36.7938H36.7967H36.7996H36.8025H36.8053H36.8082H36.8111H36.814H36.8169H36.8197H36.8226H36.8255H36.8284H36.8313H36.8341H36.837H36.8399H36.8428H36.8457H36.8485H36.8514H36.8543H36.8572H36.8601H36.8629H36.8658H36.8687H36.8716H36.8745H36.8773H36.8802H36.8831H36.886H36.8888H36.8917H36.8946H36.8975H36.9004H36.9032H36.9061H36.909H36.9119H36.9148H36.9176H36.9205H36.9234H36.9263H36.9292H36.932H36.9349H36.9378H36.9407H36.9436H36.9464H36.9493H36.9522H36.9551H36.958H36.9608H36.9637H36.9666H36.9695H36.9724H36.9752H36.9781H36.981H36.9839H36.9867H36.9896H36.9925H36.9954H36.9983H37.0011H37.004H37.0069H37.0098H37.0127H37.0155H37.0184H37.0213H37.0242H37.0271H37.0299H37.0328H37.0357H37.0386H37.0415H37.0443H37.0472H37.0501H37.053H37.0559H37.0587H37.0616H37.0645H37.0674H37.0702H37.0731H37.076H37.0789H37.0818H37.0846H37.0875H37.0904H37.0933H37.0962H37.099H37.1019H37.1048H37.1077H37.1106H37.1134H37.1163H37.1192H37.1221H37.125H37.1278H37.1307H37.1336H37.1365H37.1394H37.1422H37.1451H37.148H37.1509H37.1538H37.1566H37.1595H37.1624H37.1653H37.1681H37.171H37.1739H37.1768H37.1797H37.1825H37.1854H37.1883H37.1912H37.1941H37.1969H37.1998H37.2027H37.2056H37.2085H37.2113H37.2142H37.2171H37.22H37.2229H37.2257H37.2286H37.2315H37.2344H37.2373H37.2401H37.243H37.2459H37.2488H37.2516H37.2545H37.2574H37.2603H37.2632H37.266H37.2689H37.2718H37.2747H37.2776H37.2804H37.2833H37.2862H37.2891H37.292H37.2948H37.2977H37.3006H37.3035H37.3064H37.3092H37.3121H37.315H37.3179H37.3208H37.3236H37.3265H37.3294H37.3323H37.3352H37.338H37.3409H37.3438H37.3467H37.3495H37.3524H37.3553H37.3582H37.3611H37.3639H37.3668H37.3697H37.3726H37.3755H37.3783H37.3812H37.3841H37.387H37.3899H37.3927H37.3956H37.3985H37.4014H37.4043H37.4071H37.41H37.4129H37.4158H37.4187H37.4215H37.4244H37.4273H37.4302H37.4331H37.4359H37.4388H37.4417H37.4446H37.4474H37.4503H37.4532H37.4561H37.459H37.4618H37.4647H37.4676H37.4705H37.4734H37.4762H37.4791H37.482H37.4849H37.4878H37.4906H37.4935H37.4964H37.4993H37.5022H37.505H37.5079H37.5108H37.5137H37.5166H37.5194H37.5223H37.5252H37.5281H37.5309H37.5338H37.5367H37.5396H37.5425H37.5453H37.5482H37.5511H37.554H37.5569H37.5597H37.5626H37.5655H37.5684H37.5713H37.5741H37.577H37.5799H37.5828H37.5857H37.5885H37.5914H37.5943H37.5972H37.6001H37.6029H37.6058H37.6087H37.6116H37.6145H37.6173H37.6202H37.6231H37.626H37.6288H37.6317H37.6346H37.6375H37.6404H37.6432H37.6461H37.649H37.6519H37.6548H37.6576H37.6605H37.6634H37.6663H37.6692H37.672H37.6749H37.6778H37.6807H37.6836H37.6864H37.6893H37.6922H37.6951H37.698H37.7008H37.7037H37.7066H37.7095H37.7123H37.7152H37.7181H38.4477C42.2898 6.88419 46.008 7.55656 49.392 8.88396L43.9966 26.6654L43.9963 26.6663L42.8906 30.3347L42.8815 30.3651L42.8762 30.3964C42.7737 31.0085 42.4657 31.5289 42.0338 31.9588L42.0241 31.9684L42.015 31.9785L38.83 35.5145L38.5939 35.7494L38.5841 35.7592L38.5748 35.7695L36.4863 38.0929L36.4863 38.0928L36.4826 38.097L33.1555 41.8817C35.3299 37.3292 37.0126 32.4449 38.0835 27.4076L41.3996 12.9827L41.4978 12.5555L41.0871 12.4022L39.1243 11.6696L36.9158 10.8148Z"
                className="strokeShapeColor"
              />
            </g>
            <g className="loader-piece piece2">
              <path
                d="M7.49405 21.1849C7.98546 21.6741 8.35402 22.1632 8.84543 22.6523C9.82826 23.7528 10.8111 24.7311 11.9168 25.7093L10.6882 20.0844L10.1968 17.6388L9.09114 12.9922L25.0621 7.12279C28.5019 5.89999 32.3104 5.16631 36.2417 5.16631H36.4874C37.2245 5.16631 37.8388 5.16631 38.4531 5.16631C39.313 5.16631 40.2959 5.28859 41.1558 5.41087L38.3302 4.43264L35.996 3.57668L30.7133 1.74248L26.6591 0.275129C25.5535 -0.0917097 24.4478 -0.0917097 23.3421 0.275129L18.7965 1.86476L4.42272 7.00051L0 8.46786C1.71994 13.2368 4.29986 17.5166 7.49405 21.1849Z"
                className="fillShapeColor"
              />
              <path
                d="M0.647613 8.7798L4.58016 7.47507L4.58021 7.47519L4.59095 7.47136L18.9616 2.33674L18.9648 2.33561L23.5033 0.748456C24.5034 0.417458 25.4954 0.417182 26.4955 0.747627L30.5431 2.21264L30.5431 2.21268L30.5493 2.21482L35.8279 4.04761L37.5152 4.66631H37.5125H37.5087H37.505H37.5012H37.4974H37.4936H37.4898H37.486H37.4822H37.4784H37.4746H37.4708H37.467H37.4632H37.4594H37.4556H37.4518H37.448H37.4442H37.4404H37.4366H37.4328H37.429H37.4252H37.4214H37.4175H37.4137H37.4099H37.4061H37.4023H37.3984H37.3946H37.3908H37.387H37.3831H37.3793H37.3755H37.3716H37.3678H37.3639H37.3601H37.3563H37.3524H37.3486H37.3447H37.3409H37.337H37.3332H37.3293H37.3255H37.3216H37.3178H37.3139H37.31H37.3062H37.3023H37.2984H37.2946H37.2907H37.2868H37.2829H37.2791H37.2752H37.2713H37.2674H37.2635H37.2597H37.2558H37.2519H37.248H37.2441H37.2402H37.2363H37.2324H37.2285H37.2246H37.2207H37.2168H37.2129H37.209H37.2051H37.2012H37.1973H37.1933H37.1894H37.1855H37.1816H37.1777H37.1737H37.1698H37.1659H37.162H37.158H37.1541H37.1501H37.1462H37.1423H37.1383H37.1344H37.1304H37.1265H37.1225H37.1186H37.1146H37.1107H37.1067H37.1028H37.0988H37.0948H37.0909H37.0869H37.0829H37.079H37.075H37.071H37.067H37.063H37.0591H37.0551H37.0511H37.0471H37.0431H37.0391H37.0351H37.0311H37.0271H37.0231H37.0191H37.0151H37.0111H37.0071H37.0031H36.9991H36.9951H36.991H36.987H36.983H36.979H36.975H36.9709H36.9669H36.9629H36.9588H36.9548H36.9507H36.9467H36.9427H36.9386H36.9346H36.9305H36.9265H36.9224H36.9184H36.9143H36.9102H36.9062H36.9021H36.898H36.894H36.8899H36.8858H36.8817H36.8777H36.8736H36.8695H36.8654H36.8613H36.8572H36.8531H36.849H36.8449H36.8408H36.8367H36.8326H36.8285H36.8244H36.8203H36.8162H36.8121H36.8079H36.8038H36.7997H36.7956H36.7914H36.7873H36.7832H36.779H36.7749H36.7707H36.7666H36.7625H36.7583H36.7542H36.75H36.7458H36.7417H36.7375H36.7334H36.7292H36.725H36.7209H36.7167H36.7125H36.7083H36.7041H36.7H36.6958H36.6916H36.6874H36.6832H36.679H36.6748H36.6706H36.6664H36.6622H36.658H36.6538H36.6495H36.6453H36.6411H36.6369H36.6327H36.6284H36.6242H36.62H36.6157H36.6115H36.6073H36.603H36.5988H36.5945H36.5903H36.586H36.5818H36.5775H36.5732H36.569H36.5647H36.5604H36.5562H36.5519H36.5476H36.5433H36.539H36.5347H36.5305H36.5262H36.5219H36.5176H36.5133H36.509H36.5047H36.5003H36.496H36.4917H36.4874H36.2417C32.2488 4.66631 28.3838 5.41134 24.8946 6.65167L24.8946 6.65164L24.8896 6.65348L8.91866 12.5229L8.50194 12.676L8.60472 13.108L9.70835 17.746L10.198 20.1829L10.198 20.1829L10.1997 20.1911L11.0897 24.266C10.4455 23.6451 9.83211 23.0065 9.21836 22.3193L9.20857 22.3083L9.19816 22.2979C8.96603 22.0669 8.76157 21.8346 8.54526 21.5885L8.54097 21.5836C8.33211 21.346 8.11179 21.0954 7.85962 20.8434C4.8176 17.3467 2.34133 13.2894 0.647613 8.7798Z"
                className="strokeShapeColor"
              />
            </g>
            <g className="loader-piece piece3">
              <path
                d="M30.2236 34.8812L27.6437 36.96L24.9409 39.161L12.7785 29.1341C11.0585 27.6667 9.33857 26.0771 7.86433 24.3652C7.37292 23.876 7.00436 23.3869 6.51295 22.7755C4.91585 20.8191 3.56447 18.7403 2.33594 16.417L4.91585 24.8543L5.16156 25.8325L6.02153 28.645L6.51295 30.3569C6.75865 30.9683 7.00436 31.7019 7.49577 32.1911C7.98718 32.6802 8.60145 33.4139 9.33857 34.2698C9.82998 34.8812 10.4442 35.4926 11.0585 36.2263C16.3412 42.218 24.8181 51.8781 25.0638 52.0004C29.6093 45.7641 32.9264 38.6719 34.892 30.9683L30.2236 34.8812Z"
                className="fillShapeColor"
              />
              <path
                d="M30.5373 35.2706L30.5374 35.2706L30.5448 35.2644L33.9984 32.3697C32.0665 39.2306 29.0382 45.5761 25.0055 51.2265C24.9956 51.2158 24.9856 51.205 24.9754 51.1939C24.7123 50.9091 24.3424 50.5005 23.8869 49.9928C22.9764 48.9778 21.7296 47.5727 20.3246 45.9832C18.5117 43.9323 16.4371 41.5764 14.4836 39.3579C13.4107 38.1395 12.3743 36.9626 11.4378 35.9004C11.1406 35.5457 10.8439 35.2194 10.5677 34.9157L10.5225 34.8659C10.2293 34.5434 9.96301 34.2486 9.72829 33.9566L9.72298 33.95L9.71744 33.9435C9.59369 33.7998 9.47263 33.6586 9.35442 33.5208C8.77889 32.8496 8.27098 32.2572 7.8485 31.8367C7.49763 31.4875 7.29672 30.9788 7.07167 30.409C7.04376 30.3383 7.01548 30.2667 6.98649 30.1944L6.50212 28.507L6.5022 28.507L6.49968 28.4987L5.64341 25.6984L5.40079 24.7325L5.39771 24.7202L5.394 24.7081L4.03323 20.2578C4.68511 21.2357 5.37812 22.1759 6.1244 23.0902C6.2051 23.1906 6.28334 23.2889 6.36012 23.3853C6.73487 23.8559 7.07496 24.283 7.49786 24.7058C8.99324 26.44 10.7301 28.0438 12.4539 29.5145L12.4539 29.5145L12.4604 29.5199L24.6229 39.5468L24.939 39.8074L25.2567 39.5487L27.9574 37.3493L27.9594 37.3477L30.5373 35.2706Z"
                className="strokeShapeColor"
              />
            </g>
          </g>
          <defs>
            <pattern id="prefix__pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
              <use xlinkHref="#prefix__image0_1082_145292" transform="scale(.00357)" />
            </pattern>
            <image className="rotating" id="prefix__image0_1082_145292" width={280} height={280} xlinkHref={neuronLoader} />
          </defs>
        </svg>
      </div>
    </Style>
  );
};

export default LogoLoader;
