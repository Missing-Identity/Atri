import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { useMain_DivCb, useNavbar_DivCb, usenavbarCb, useApp_flexCb, useDiv13Cb, useApp_logos_flexCb, useMenu_flexCb, usecards_flexCb, usecard1Cb, usec1Cb, useDiv23Cb, usecard2Cb, useFlex23Cb, useDiv34Cb, usecard3Cb, useFlex24Cb, useDiv36Cb, usecard4Cb, useFlex25Cb, useDiv38Cb, useFlex27Cb, useAbout_Us_DivCb, useLeft_divCb, useimage_divCb, useLocation_DivCb, useFlex30Cb, useFlex31Cb, useFlex32Cb, useAdd_divCb, useIcon_divCb, useFlex33Cb, useDiv50Cb, useDiv51Cb, useFlex34Cb, useDiv52Cb, useDiv53Cb, useRight_divCb, useFlex35Cb, useRight_inner_divCb, useFlex36Cb, useFlex38Cb, useItems_FlexCb, useFlex43Cb, useFlex40Cb, useCard_divCb, usecard_image_divCb, useDiv62Cb, useFlex56Cb, useDiv107Cb, useDiv106Cb, useDiv105Cb, useFlex57Cb, useDiv110Cb, useDiv109Cb, useDiv108Cb, useFlex58Cb, useDiv113Cb, useDiv112Cb, useDiv111Cb, useFlex59Cb, useDiv116Cb, useDiv115Cb, useDiv114Cb, useFlex60Cb, useDiv119Cb, useDiv118Cb, useDiv117Cb, useFlex61Cb, useDiv122Cb, useDiv121Cb, useDiv120Cb, useFlex62Cb, useDiv125Cb, useDiv124Cb, useDiv123Cb, useDiv127Cb, useFlex63Cb, useDiv128Cb, useFlex64Cb, useFlex65Cb, useDiv133Cb, useFlex66Cb, useDiv132Cb, useDiv159Cb, useFlex80Cb, useDiv158Cb, useFlex79Cb, useDiv157Cb, useFlex78Cb, useDiv179Cb, useFlex90Cb, useDiv160Cb, useFlex81Cb, useDiv161Cb, useDiv162Cb, useDiv163Cb, useFlex82Cb, useDiv166Cb, useDiv167Cb, useFlex86Cb, useDiv173Cb, useFlex87Cb, useDiv174Cb, useFlex88Cb, useDiv175Cb, useDiv176Cb, useFlex89Cb, useDiv168Cb, useDiv164Cb, useFlex85Cb, useDiv180Cb, useFlex91Cb, useDiv181Cb, useFlex92Cb, useDiv182Cb, useDiv183Cb, useDiv184Cb, useFlex93Cb, useDiv185Cb, useFlex94Cb, useDiv186Cb, useFlex95Cb, useDiv187Cb, useFlex96Cb, useDiv203Cb, useFlex112Cb, useDiv204Cb, useFlex113Cb, useDiv205Cb, useFlex114Cb, useDiv206Cb, useFlex115Cb, useDiv207Cb, useFlex116Cb, useDiv209Cb, useFlex120Cb, useFlex117Cb, useDiv212Cb, useDiv213Cb, useFlex118Cb, useDiv214Cb, useDiv215Cb, useFlex119Cb, useDiv216Cb, useDiv217Cb, useDiv210Cb, useDiv211Cb, useDiv208Cb, useDiv218Cb, useDiv219Cb, useFlex121Cb, useDiv220Cb, useFlex122Cb, useDiv226Cb, useFlex128Cb, useDiv227Cb, useFlex129Cb, useDiv228Cb, useFlex130Cb, useDiv229Cb, useFlex131Cb, useDiv230Cb, useFlex132Cb, useDiv231Cb, useFlex133Cb, useDiv232Cb, useFlex135Cb, useDiv235Cb, useFlex134Cb, useDiv233Cb, useDiv234Cb, useDiv236Cb, useFlex136Cb, useDiv237Cb, useDiv238Cb, useDiv239Cb, useFlex137Cb, useDiv240Cb, useDiv241Cb, useDiv242Cb, useDiv243Cb, useDiv244Cb, useFlex138Cb, useDiv245Cb, useFlex140Cb, useFlex141Cb, useDiv246Cb, useFlex142Cb, useDiv252Cb, useFlex143Cb, useDiv253Cb, useFlex146Cb, useDiv247Cb, useFlex139Cb, useDiv248Cb, useDiv249Cb, useDiv250Cb, useDiv251Cb, useLogoCb, useHome_linkCb, useAboutCb, usemenuCb, usePagesCb, useCartCb, useOrder_OnlineCb, useReservateCb, useTextBox12Cb, usegrub_hubCb, usePostmatesCb, useDoordashCb, useRappingCb, useMenu_TextCb, useImage10Cb, usebreakfastCb, useLoremCb, useTextBox39Cb, useTextBox26Cb, useTextBox27Cb, useImage16Cb, useTextBox40Cb, useTextBox28Cb, useTextBox29Cb, useImage17Cb, useTextBox41Cb, useTextBox30Cb, useTextBox31Cb, useImage18Cb, useTextBox42Cb, useButton6Cb, useButton9Cb, useImage19Cb, useTextBox35Cb, useAddressCb, useImage21Cb, useImage22Cb, useTextBox37Cb, useImage23Cb, useTextBox38Cb, useAbout_UsCb, useLorem_aboutCb, useButton7Cb, useButton8Cb, useItems_TitleCb, usedescCb, useTextBox46Cb, useItemCb, useImage24Cb, usePriceCb, useTextBox91Cb, useTextBox92Cb, useImage39Cb, useTextBox90Cb, useTextBox94Cb, useTextBox95Cb, useImage40Cb, useTextBox93Cb, useTextBox97Cb, useTextBox98Cb, useImage41Cb, useTextBox96Cb, useTextBox100Cb, useTextBox101Cb, useImage42Cb, useTextBox99Cb, useTextBox103Cb, useTextBox104Cb, useImage43Cb, useTextBox102Cb, useTextBox106Cb, useTextBox107Cb, useImage44Cb, useTextBox105Cb, useTextBox109Cb, useTextBox110Cb, useImage45Cb, useTextBox108Cb, useButton10Cb, useButton11Cb, useTextBox111Cb, useTextBox112Cb, useButton12Cb, useButton13Cb, useImage47Cb, useImage52Cb, useTextBox124Cb, useTextBox125Cb, useTextBox126Cb, useButton20Cb, useButton21Cb, useDiv177Cb, useDiv178Cb, useTextBox127Cb, useTextBox128Cb, useImage53Cb, useTextBox129Cb, useTextBox130Cb, useImage56Cb, useImage57Cb, useImage58Cb, useImage59Cb, useImage60Cb, useImage61Cb, useTextBox132Cb, useTextBox131Cb, useImage54Cb, useButton24Cb, useButton25Cb, useTextBox133Cb, useButton26Cb, useTextBox134Cb, useTextBox135Cb, useTextBox136Cb, useImage62Cb, useTextBox138Cb, useTextBox139Cb, useImage63Cb, useTextBox170Cb, useTextBox171Cb, useImage79Cb, useTextBox172Cb, useTextBox173Cb, useImage80Cb, useTextBox174Cb, useTextBox175Cb, useImage81Cb, useTextBox176Cb, useImage82Cb, useTextBox177Cb, useImage83Cb, useImage84Cb, useTextBox178Cb, useTextBox180Cb, useTextBox179Cb, useButton27Cb, useTextBox181Cb, useInput1Cb, useInput7Cb, useTextBox187Cb, useInput8Cb, useTextBox188Cb, useInput9Cb, useTextBox189Cb, useInput10Cb, useTextBox190Cb, useInput11Cb, useTextBox191Cb, useTextBox192Cb, useInput12Cb, useButton28Cb, useTextBox193Cb, useImage85Cb, useImage86Cb, useImage87Cb, useImage88Cb, useImage89Cb, useImage90Cb, useTextBox195Cb, useImage95Cb, useImage96Cb, useImage97Cb, useImage98Cb, useImage99Cb, useImage100Cb, useTextBox196Cb, useTextBox197Cb, useTextBox198Cb, useTextBox199Cb, useTextBox200Cb, useTextBox201Cb, useTextBox202Cb, useTextBox203Cb, useTextBox212Cb, useTextBox213Cb, useTextBox214Cb, useTextBox215Cb, useTextBox216Cb, useTextBox217Cb, useTextBox218Cb, useTextBox219Cb, useTextBox194Cb, useImage91Cb, useImage92Cb, useImage93Cb, useImage94Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Main_DivProps = useStore((state)=>state["Home"]["Main_Div"]);
const Main_DivIoProps = useIoStore((state)=>state["Home"]["Main_Div"]);
const Main_DivCb = useMain_DivCb()
const Navbar_DivProps = useStore((state)=>state["Home"]["Navbar_Div"]);
const Navbar_DivIoProps = useIoStore((state)=>state["Home"]["Navbar_Div"]);
const Navbar_DivCb = useNavbar_DivCb()
const navbarProps = useStore((state)=>state["Home"]["navbar"]);
const navbarIoProps = useIoStore((state)=>state["Home"]["navbar"]);
const navbarCb = usenavbarCb()
const App_flexProps = useStore((state)=>state["Home"]["App_flex"]);
const App_flexIoProps = useIoStore((state)=>state["Home"]["App_flex"]);
const App_flexCb = useApp_flexCb()
const Div13Props = useStore((state)=>state["Home"]["Div13"]);
const Div13IoProps = useIoStore((state)=>state["Home"]["Div13"]);
const Div13Cb = useDiv13Cb()
const App_logos_flexProps = useStore((state)=>state["Home"]["App_logos_flex"]);
const App_logos_flexIoProps = useIoStore((state)=>state["Home"]["App_logos_flex"]);
const App_logos_flexCb = useApp_logos_flexCb()
const Menu_flexProps = useStore((state)=>state["Home"]["Menu_flex"]);
const Menu_flexIoProps = useIoStore((state)=>state["Home"]["Menu_flex"]);
const Menu_flexCb = useMenu_flexCb()
const cards_flexProps = useStore((state)=>state["Home"]["cards_flex"]);
const cards_flexIoProps = useIoStore((state)=>state["Home"]["cards_flex"]);
const cards_flexCb = usecards_flexCb()
const card1Props = useStore((state)=>state["Home"]["card1"]);
const card1IoProps = useIoStore((state)=>state["Home"]["card1"]);
const card1Cb = usecard1Cb()
const c1Props = useStore((state)=>state["Home"]["c1"]);
const c1IoProps = useIoStore((state)=>state["Home"]["c1"]);
const c1Cb = usec1Cb()
const Div23Props = useStore((state)=>state["Home"]["Div23"]);
const Div23IoProps = useIoStore((state)=>state["Home"]["Div23"]);
const Div23Cb = useDiv23Cb()
const card2Props = useStore((state)=>state["Home"]["card2"]);
const card2IoProps = useIoStore((state)=>state["Home"]["card2"]);
const card2Cb = usecard2Cb()
const Flex23Props = useStore((state)=>state["Home"]["Flex23"]);
const Flex23IoProps = useIoStore((state)=>state["Home"]["Flex23"]);
const Flex23Cb = useFlex23Cb()
const Div34Props = useStore((state)=>state["Home"]["Div34"]);
const Div34IoProps = useIoStore((state)=>state["Home"]["Div34"]);
const Div34Cb = useDiv34Cb()
const card3Props = useStore((state)=>state["Home"]["card3"]);
const card3IoProps = useIoStore((state)=>state["Home"]["card3"]);
const card3Cb = usecard3Cb()
const Flex24Props = useStore((state)=>state["Home"]["Flex24"]);
const Flex24IoProps = useIoStore((state)=>state["Home"]["Flex24"]);
const Flex24Cb = useFlex24Cb()
const Div36Props = useStore((state)=>state["Home"]["Div36"]);
const Div36IoProps = useIoStore((state)=>state["Home"]["Div36"]);
const Div36Cb = useDiv36Cb()
const card4Props = useStore((state)=>state["Home"]["card4"]);
const card4IoProps = useIoStore((state)=>state["Home"]["card4"]);
const card4Cb = usecard4Cb()
const Flex25Props = useStore((state)=>state["Home"]["Flex25"]);
const Flex25IoProps = useIoStore((state)=>state["Home"]["Flex25"]);
const Flex25Cb = useFlex25Cb()
const Div38Props = useStore((state)=>state["Home"]["Div38"]);
const Div38IoProps = useIoStore((state)=>state["Home"]["Div38"]);
const Div38Cb = useDiv38Cb()
const Flex27Props = useStore((state)=>state["Home"]["Flex27"]);
const Flex27IoProps = useIoStore((state)=>state["Home"]["Flex27"]);
const Flex27Cb = useFlex27Cb()
const About_Us_DivProps = useStore((state)=>state["Home"]["About_Us_Div"]);
const About_Us_DivIoProps = useIoStore((state)=>state["Home"]["About_Us_Div"]);
const About_Us_DivCb = useAbout_Us_DivCb()
const Left_divProps = useStore((state)=>state["Home"]["Left_div"]);
const Left_divIoProps = useIoStore((state)=>state["Home"]["Left_div"]);
const Left_divCb = useLeft_divCb()
const image_divProps = useStore((state)=>state["Home"]["image_div"]);
const image_divIoProps = useIoStore((state)=>state["Home"]["image_div"]);
const image_divCb = useimage_divCb()
const Location_DivProps = useStore((state)=>state["Home"]["Location_Div"]);
const Location_DivIoProps = useIoStore((state)=>state["Home"]["Location_Div"]);
const Location_DivCb = useLocation_DivCb()
const Flex30Props = useStore((state)=>state["Home"]["Flex30"]);
const Flex30IoProps = useIoStore((state)=>state["Home"]["Flex30"]);
const Flex30Cb = useFlex30Cb()
const Flex31Props = useStore((state)=>state["Home"]["Flex31"]);
const Flex31IoProps = useIoStore((state)=>state["Home"]["Flex31"]);
const Flex31Cb = useFlex31Cb()
const Flex32Props = useStore((state)=>state["Home"]["Flex32"]);
const Flex32IoProps = useIoStore((state)=>state["Home"]["Flex32"]);
const Flex32Cb = useFlex32Cb()
const Add_divProps = useStore((state)=>state["Home"]["Add_div"]);
const Add_divIoProps = useIoStore((state)=>state["Home"]["Add_div"]);
const Add_divCb = useAdd_divCb()
const Icon_divProps = useStore((state)=>state["Home"]["Icon_div"]);
const Icon_divIoProps = useIoStore((state)=>state["Home"]["Icon_div"]);
const Icon_divCb = useIcon_divCb()
const Flex33Props = useStore((state)=>state["Home"]["Flex33"]);
const Flex33IoProps = useIoStore((state)=>state["Home"]["Flex33"]);
const Flex33Cb = useFlex33Cb()
const Div50Props = useStore((state)=>state["Home"]["Div50"]);
const Div50IoProps = useIoStore((state)=>state["Home"]["Div50"]);
const Div50Cb = useDiv50Cb()
const Div51Props = useStore((state)=>state["Home"]["Div51"]);
const Div51IoProps = useIoStore((state)=>state["Home"]["Div51"]);
const Div51Cb = useDiv51Cb()
const Flex34Props = useStore((state)=>state["Home"]["Flex34"]);
const Flex34IoProps = useIoStore((state)=>state["Home"]["Flex34"]);
const Flex34Cb = useFlex34Cb()
const Div52Props = useStore((state)=>state["Home"]["Div52"]);
const Div52IoProps = useIoStore((state)=>state["Home"]["Div52"]);
const Div52Cb = useDiv52Cb()
const Div53Props = useStore((state)=>state["Home"]["Div53"]);
const Div53IoProps = useIoStore((state)=>state["Home"]["Div53"]);
const Div53Cb = useDiv53Cb()
const Right_divProps = useStore((state)=>state["Home"]["Right_div"]);
const Right_divIoProps = useIoStore((state)=>state["Home"]["Right_div"]);
const Right_divCb = useRight_divCb()
const Flex35Props = useStore((state)=>state["Home"]["Flex35"]);
const Flex35IoProps = useIoStore((state)=>state["Home"]["Flex35"]);
const Flex35Cb = useFlex35Cb()
const Right_inner_divProps = useStore((state)=>state["Home"]["Right_inner_div"]);
const Right_inner_divIoProps = useIoStore((state)=>state["Home"]["Right_inner_div"]);
const Right_inner_divCb = useRight_inner_divCb()
const Flex36Props = useStore((state)=>state["Home"]["Flex36"]);
const Flex36IoProps = useIoStore((state)=>state["Home"]["Flex36"]);
const Flex36Cb = useFlex36Cb()
const Flex38Props = useStore((state)=>state["Home"]["Flex38"]);
const Flex38IoProps = useIoStore((state)=>state["Home"]["Flex38"]);
const Flex38Cb = useFlex38Cb()
const Items_FlexProps = useStore((state)=>state["Home"]["Items_Flex"]);
const Items_FlexIoProps = useIoStore((state)=>state["Home"]["Items_Flex"]);
const Items_FlexCb = useItems_FlexCb()
const Flex43Props = useStore((state)=>state["Home"]["Flex43"]);
const Flex43IoProps = useIoStore((state)=>state["Home"]["Flex43"]);
const Flex43Cb = useFlex43Cb()
const Flex40Props = useStore((state)=>state["Home"]["Flex40"]);
const Flex40IoProps = useIoStore((state)=>state["Home"]["Flex40"]);
const Flex40Cb = useFlex40Cb()
const Card_divProps = useStore((state)=>state["Home"]["Card_div"]);
const Card_divIoProps = useIoStore((state)=>state["Home"]["Card_div"]);
const Card_divCb = useCard_divCb()
const card_image_divProps = useStore((state)=>state["Home"]["card_image_div"]);
const card_image_divIoProps = useIoStore((state)=>state["Home"]["card_image_div"]);
const card_image_divCb = usecard_image_divCb()
const Div62Props = useStore((state)=>state["Home"]["Div62"]);
const Div62IoProps = useIoStore((state)=>state["Home"]["Div62"]);
const Div62Cb = useDiv62Cb()
const Flex56Props = useStore((state)=>state["Home"]["Flex56"]);
const Flex56IoProps = useIoStore((state)=>state["Home"]["Flex56"]);
const Flex56Cb = useFlex56Cb()
const Div107Props = useStore((state)=>state["Home"]["Div107"]);
const Div107IoProps = useIoStore((state)=>state["Home"]["Div107"]);
const Div107Cb = useDiv107Cb()
const Div106Props = useStore((state)=>state["Home"]["Div106"]);
const Div106IoProps = useIoStore((state)=>state["Home"]["Div106"]);
const Div106Cb = useDiv106Cb()
const Div105Props = useStore((state)=>state["Home"]["Div105"]);
const Div105IoProps = useIoStore((state)=>state["Home"]["Div105"]);
const Div105Cb = useDiv105Cb()
const Flex57Props = useStore((state)=>state["Home"]["Flex57"]);
const Flex57IoProps = useIoStore((state)=>state["Home"]["Flex57"]);
const Flex57Cb = useFlex57Cb()
const Div110Props = useStore((state)=>state["Home"]["Div110"]);
const Div110IoProps = useIoStore((state)=>state["Home"]["Div110"]);
const Div110Cb = useDiv110Cb()
const Div109Props = useStore((state)=>state["Home"]["Div109"]);
const Div109IoProps = useIoStore((state)=>state["Home"]["Div109"]);
const Div109Cb = useDiv109Cb()
const Div108Props = useStore((state)=>state["Home"]["Div108"]);
const Div108IoProps = useIoStore((state)=>state["Home"]["Div108"]);
const Div108Cb = useDiv108Cb()
const Flex58Props = useStore((state)=>state["Home"]["Flex58"]);
const Flex58IoProps = useIoStore((state)=>state["Home"]["Flex58"]);
const Flex58Cb = useFlex58Cb()
const Div113Props = useStore((state)=>state["Home"]["Div113"]);
const Div113IoProps = useIoStore((state)=>state["Home"]["Div113"]);
const Div113Cb = useDiv113Cb()
const Div112Props = useStore((state)=>state["Home"]["Div112"]);
const Div112IoProps = useIoStore((state)=>state["Home"]["Div112"]);
const Div112Cb = useDiv112Cb()
const Div111Props = useStore((state)=>state["Home"]["Div111"]);
const Div111IoProps = useIoStore((state)=>state["Home"]["Div111"]);
const Div111Cb = useDiv111Cb()
const Flex59Props = useStore((state)=>state["Home"]["Flex59"]);
const Flex59IoProps = useIoStore((state)=>state["Home"]["Flex59"]);
const Flex59Cb = useFlex59Cb()
const Div116Props = useStore((state)=>state["Home"]["Div116"]);
const Div116IoProps = useIoStore((state)=>state["Home"]["Div116"]);
const Div116Cb = useDiv116Cb()
const Div115Props = useStore((state)=>state["Home"]["Div115"]);
const Div115IoProps = useIoStore((state)=>state["Home"]["Div115"]);
const Div115Cb = useDiv115Cb()
const Div114Props = useStore((state)=>state["Home"]["Div114"]);
const Div114IoProps = useIoStore((state)=>state["Home"]["Div114"]);
const Div114Cb = useDiv114Cb()
const Flex60Props = useStore((state)=>state["Home"]["Flex60"]);
const Flex60IoProps = useIoStore((state)=>state["Home"]["Flex60"]);
const Flex60Cb = useFlex60Cb()
const Div119Props = useStore((state)=>state["Home"]["Div119"]);
const Div119IoProps = useIoStore((state)=>state["Home"]["Div119"]);
const Div119Cb = useDiv119Cb()
const Div118Props = useStore((state)=>state["Home"]["Div118"]);
const Div118IoProps = useIoStore((state)=>state["Home"]["Div118"]);
const Div118Cb = useDiv118Cb()
const Div117Props = useStore((state)=>state["Home"]["Div117"]);
const Div117IoProps = useIoStore((state)=>state["Home"]["Div117"]);
const Div117Cb = useDiv117Cb()
const Flex61Props = useStore((state)=>state["Home"]["Flex61"]);
const Flex61IoProps = useIoStore((state)=>state["Home"]["Flex61"]);
const Flex61Cb = useFlex61Cb()
const Div122Props = useStore((state)=>state["Home"]["Div122"]);
const Div122IoProps = useIoStore((state)=>state["Home"]["Div122"]);
const Div122Cb = useDiv122Cb()
const Div121Props = useStore((state)=>state["Home"]["Div121"]);
const Div121IoProps = useIoStore((state)=>state["Home"]["Div121"]);
const Div121Cb = useDiv121Cb()
const Div120Props = useStore((state)=>state["Home"]["Div120"]);
const Div120IoProps = useIoStore((state)=>state["Home"]["Div120"]);
const Div120Cb = useDiv120Cb()
const Flex62Props = useStore((state)=>state["Home"]["Flex62"]);
const Flex62IoProps = useIoStore((state)=>state["Home"]["Flex62"]);
const Flex62Cb = useFlex62Cb()
const Div125Props = useStore((state)=>state["Home"]["Div125"]);
const Div125IoProps = useIoStore((state)=>state["Home"]["Div125"]);
const Div125Cb = useDiv125Cb()
const Div124Props = useStore((state)=>state["Home"]["Div124"]);
const Div124IoProps = useIoStore((state)=>state["Home"]["Div124"]);
const Div124Cb = useDiv124Cb()
const Div123Props = useStore((state)=>state["Home"]["Div123"]);
const Div123IoProps = useIoStore((state)=>state["Home"]["Div123"]);
const Div123Cb = useDiv123Cb()
const Div127Props = useStore((state)=>state["Home"]["Div127"]);
const Div127IoProps = useIoStore((state)=>state["Home"]["Div127"]);
const Div127Cb = useDiv127Cb()
const Flex63Props = useStore((state)=>state["Home"]["Flex63"]);
const Flex63IoProps = useIoStore((state)=>state["Home"]["Flex63"]);
const Flex63Cb = useFlex63Cb()
const Div128Props = useStore((state)=>state["Home"]["Div128"]);
const Div128IoProps = useIoStore((state)=>state["Home"]["Div128"]);
const Div128Cb = useDiv128Cb()
const Flex64Props = useStore((state)=>state["Home"]["Flex64"]);
const Flex64IoProps = useIoStore((state)=>state["Home"]["Flex64"]);
const Flex64Cb = useFlex64Cb()
const Flex65Props = useStore((state)=>state["Home"]["Flex65"]);
const Flex65IoProps = useIoStore((state)=>state["Home"]["Flex65"]);
const Flex65Cb = useFlex65Cb()
const Div133Props = useStore((state)=>state["Home"]["Div133"]);
const Div133IoProps = useIoStore((state)=>state["Home"]["Div133"]);
const Div133Cb = useDiv133Cb()
const Flex66Props = useStore((state)=>state["Home"]["Flex66"]);
const Flex66IoProps = useIoStore((state)=>state["Home"]["Flex66"]);
const Flex66Cb = useFlex66Cb()
const Div132Props = useStore((state)=>state["Home"]["Div132"]);
const Div132IoProps = useIoStore((state)=>state["Home"]["Div132"]);
const Div132Cb = useDiv132Cb()
const Div159Props = useStore((state)=>state["Home"]["Div159"]);
const Div159IoProps = useIoStore((state)=>state["Home"]["Div159"]);
const Div159Cb = useDiv159Cb()
const Flex80Props = useStore((state)=>state["Home"]["Flex80"]);
const Flex80IoProps = useIoStore((state)=>state["Home"]["Flex80"]);
const Flex80Cb = useFlex80Cb()
const Div158Props = useStore((state)=>state["Home"]["Div158"]);
const Div158IoProps = useIoStore((state)=>state["Home"]["Div158"]);
const Div158Cb = useDiv158Cb()
const Flex79Props = useStore((state)=>state["Home"]["Flex79"]);
const Flex79IoProps = useIoStore((state)=>state["Home"]["Flex79"]);
const Flex79Cb = useFlex79Cb()
const Div157Props = useStore((state)=>state["Home"]["Div157"]);
const Div157IoProps = useIoStore((state)=>state["Home"]["Div157"]);
const Div157Cb = useDiv157Cb()
const Flex78Props = useStore((state)=>state["Home"]["Flex78"]);
const Flex78IoProps = useIoStore((state)=>state["Home"]["Flex78"]);
const Flex78Cb = useFlex78Cb()
const Div179Props = useStore((state)=>state["Home"]["Div179"]);
const Div179IoProps = useIoStore((state)=>state["Home"]["Div179"]);
const Div179Cb = useDiv179Cb()
const Flex90Props = useStore((state)=>state["Home"]["Flex90"]);
const Flex90IoProps = useIoStore((state)=>state["Home"]["Flex90"]);
const Flex90Cb = useFlex90Cb()
const Div160Props = useStore((state)=>state["Home"]["Div160"]);
const Div160IoProps = useIoStore((state)=>state["Home"]["Div160"]);
const Div160Cb = useDiv160Cb()
const Flex81Props = useStore((state)=>state["Home"]["Flex81"]);
const Flex81IoProps = useIoStore((state)=>state["Home"]["Flex81"]);
const Flex81Cb = useFlex81Cb()
const Div161Props = useStore((state)=>state["Home"]["Div161"]);
const Div161IoProps = useIoStore((state)=>state["Home"]["Div161"]);
const Div161Cb = useDiv161Cb()
const Div162Props = useStore((state)=>state["Home"]["Div162"]);
const Div162IoProps = useIoStore((state)=>state["Home"]["Div162"]);
const Div162Cb = useDiv162Cb()
const Div163Props = useStore((state)=>state["Home"]["Div163"]);
const Div163IoProps = useIoStore((state)=>state["Home"]["Div163"]);
const Div163Cb = useDiv163Cb()
const Flex82Props = useStore((state)=>state["Home"]["Flex82"]);
const Flex82IoProps = useIoStore((state)=>state["Home"]["Flex82"]);
const Flex82Cb = useFlex82Cb()
const Div166Props = useStore((state)=>state["Home"]["Div166"]);
const Div166IoProps = useIoStore((state)=>state["Home"]["Div166"]);
const Div166Cb = useDiv166Cb()
const Div167Props = useStore((state)=>state["Home"]["Div167"]);
const Div167IoProps = useIoStore((state)=>state["Home"]["Div167"]);
const Div167Cb = useDiv167Cb()
const Flex86Props = useStore((state)=>state["Home"]["Flex86"]);
const Flex86IoProps = useIoStore((state)=>state["Home"]["Flex86"]);
const Flex86Cb = useFlex86Cb()
const Div173Props = useStore((state)=>state["Home"]["Div173"]);
const Div173IoProps = useIoStore((state)=>state["Home"]["Div173"]);
const Div173Cb = useDiv173Cb()
const Flex87Props = useStore((state)=>state["Home"]["Flex87"]);
const Flex87IoProps = useIoStore((state)=>state["Home"]["Flex87"]);
const Flex87Cb = useFlex87Cb()
const Div174Props = useStore((state)=>state["Home"]["Div174"]);
const Div174IoProps = useIoStore((state)=>state["Home"]["Div174"]);
const Div174Cb = useDiv174Cb()
const Flex88Props = useStore((state)=>state["Home"]["Flex88"]);
const Flex88IoProps = useIoStore((state)=>state["Home"]["Flex88"]);
const Flex88Cb = useFlex88Cb()
const Div175Props = useStore((state)=>state["Home"]["Div175"]);
const Div175IoProps = useIoStore((state)=>state["Home"]["Div175"]);
const Div175Cb = useDiv175Cb()
const Div176Props = useStore((state)=>state["Home"]["Div176"]);
const Div176IoProps = useIoStore((state)=>state["Home"]["Div176"]);
const Div176Cb = useDiv176Cb()
const Flex89Props = useStore((state)=>state["Home"]["Flex89"]);
const Flex89IoProps = useIoStore((state)=>state["Home"]["Flex89"]);
const Flex89Cb = useFlex89Cb()
const Div168Props = useStore((state)=>state["Home"]["Div168"]);
const Div168IoProps = useIoStore((state)=>state["Home"]["Div168"]);
const Div168Cb = useDiv168Cb()
const Div164Props = useStore((state)=>state["Home"]["Div164"]);
const Div164IoProps = useIoStore((state)=>state["Home"]["Div164"]);
const Div164Cb = useDiv164Cb()
const Flex85Props = useStore((state)=>state["Home"]["Flex85"]);
const Flex85IoProps = useIoStore((state)=>state["Home"]["Flex85"]);
const Flex85Cb = useFlex85Cb()
const Div180Props = useStore((state)=>state["Home"]["Div180"]);
const Div180IoProps = useIoStore((state)=>state["Home"]["Div180"]);
const Div180Cb = useDiv180Cb()
const Flex91Props = useStore((state)=>state["Home"]["Flex91"]);
const Flex91IoProps = useIoStore((state)=>state["Home"]["Flex91"]);
const Flex91Cb = useFlex91Cb()
const Div181Props = useStore((state)=>state["Home"]["Div181"]);
const Div181IoProps = useIoStore((state)=>state["Home"]["Div181"]);
const Div181Cb = useDiv181Cb()
const Flex92Props = useStore((state)=>state["Home"]["Flex92"]);
const Flex92IoProps = useIoStore((state)=>state["Home"]["Flex92"]);
const Flex92Cb = useFlex92Cb()
const Div182Props = useStore((state)=>state["Home"]["Div182"]);
const Div182IoProps = useIoStore((state)=>state["Home"]["Div182"]);
const Div182Cb = useDiv182Cb()
const Div183Props = useStore((state)=>state["Home"]["Div183"]);
const Div183IoProps = useIoStore((state)=>state["Home"]["Div183"]);
const Div183Cb = useDiv183Cb()
const Div184Props = useStore((state)=>state["Home"]["Div184"]);
const Div184IoProps = useIoStore((state)=>state["Home"]["Div184"]);
const Div184Cb = useDiv184Cb()
const Flex93Props = useStore((state)=>state["Home"]["Flex93"]);
const Flex93IoProps = useIoStore((state)=>state["Home"]["Flex93"]);
const Flex93Cb = useFlex93Cb()
const Div185Props = useStore((state)=>state["Home"]["Div185"]);
const Div185IoProps = useIoStore((state)=>state["Home"]["Div185"]);
const Div185Cb = useDiv185Cb()
const Flex94Props = useStore((state)=>state["Home"]["Flex94"]);
const Flex94IoProps = useIoStore((state)=>state["Home"]["Flex94"]);
const Flex94Cb = useFlex94Cb()
const Div186Props = useStore((state)=>state["Home"]["Div186"]);
const Div186IoProps = useIoStore((state)=>state["Home"]["Div186"]);
const Div186Cb = useDiv186Cb()
const Flex95Props = useStore((state)=>state["Home"]["Flex95"]);
const Flex95IoProps = useIoStore((state)=>state["Home"]["Flex95"]);
const Flex95Cb = useFlex95Cb()
const Div187Props = useStore((state)=>state["Home"]["Div187"]);
const Div187IoProps = useIoStore((state)=>state["Home"]["Div187"]);
const Div187Cb = useDiv187Cb()
const Flex96Props = useStore((state)=>state["Home"]["Flex96"]);
const Flex96IoProps = useIoStore((state)=>state["Home"]["Flex96"]);
const Flex96Cb = useFlex96Cb()
const Div203Props = useStore((state)=>state["Home"]["Div203"]);
const Div203IoProps = useIoStore((state)=>state["Home"]["Div203"]);
const Div203Cb = useDiv203Cb()
const Flex112Props = useStore((state)=>state["Home"]["Flex112"]);
const Flex112IoProps = useIoStore((state)=>state["Home"]["Flex112"]);
const Flex112Cb = useFlex112Cb()
const Div204Props = useStore((state)=>state["Home"]["Div204"]);
const Div204IoProps = useIoStore((state)=>state["Home"]["Div204"]);
const Div204Cb = useDiv204Cb()
const Flex113Props = useStore((state)=>state["Home"]["Flex113"]);
const Flex113IoProps = useIoStore((state)=>state["Home"]["Flex113"]);
const Flex113Cb = useFlex113Cb()
const Div205Props = useStore((state)=>state["Home"]["Div205"]);
const Div205IoProps = useIoStore((state)=>state["Home"]["Div205"]);
const Div205Cb = useDiv205Cb()
const Flex114Props = useStore((state)=>state["Home"]["Flex114"]);
const Flex114IoProps = useIoStore((state)=>state["Home"]["Flex114"]);
const Flex114Cb = useFlex114Cb()
const Div206Props = useStore((state)=>state["Home"]["Div206"]);
const Div206IoProps = useIoStore((state)=>state["Home"]["Div206"]);
const Div206Cb = useDiv206Cb()
const Flex115Props = useStore((state)=>state["Home"]["Flex115"]);
const Flex115IoProps = useIoStore((state)=>state["Home"]["Flex115"]);
const Flex115Cb = useFlex115Cb()
const Div207Props = useStore((state)=>state["Home"]["Div207"]);
const Div207IoProps = useIoStore((state)=>state["Home"]["Div207"]);
const Div207Cb = useDiv207Cb()
const Flex116Props = useStore((state)=>state["Home"]["Flex116"]);
const Flex116IoProps = useIoStore((state)=>state["Home"]["Flex116"]);
const Flex116Cb = useFlex116Cb()
const Div209Props = useStore((state)=>state["Home"]["Div209"]);
const Div209IoProps = useIoStore((state)=>state["Home"]["Div209"]);
const Div209Cb = useDiv209Cb()
const Flex120Props = useStore((state)=>state["Home"]["Flex120"]);
const Flex120IoProps = useIoStore((state)=>state["Home"]["Flex120"]);
const Flex120Cb = useFlex120Cb()
const Flex117Props = useStore((state)=>state["Home"]["Flex117"]);
const Flex117IoProps = useIoStore((state)=>state["Home"]["Flex117"]);
const Flex117Cb = useFlex117Cb()
const Div212Props = useStore((state)=>state["Home"]["Div212"]);
const Div212IoProps = useIoStore((state)=>state["Home"]["Div212"]);
const Div212Cb = useDiv212Cb()
const Div213Props = useStore((state)=>state["Home"]["Div213"]);
const Div213IoProps = useIoStore((state)=>state["Home"]["Div213"]);
const Div213Cb = useDiv213Cb()
const Flex118Props = useStore((state)=>state["Home"]["Flex118"]);
const Flex118IoProps = useIoStore((state)=>state["Home"]["Flex118"]);
const Flex118Cb = useFlex118Cb()
const Div214Props = useStore((state)=>state["Home"]["Div214"]);
const Div214IoProps = useIoStore((state)=>state["Home"]["Div214"]);
const Div214Cb = useDiv214Cb()
const Div215Props = useStore((state)=>state["Home"]["Div215"]);
const Div215IoProps = useIoStore((state)=>state["Home"]["Div215"]);
const Div215Cb = useDiv215Cb()
const Flex119Props = useStore((state)=>state["Home"]["Flex119"]);
const Flex119IoProps = useIoStore((state)=>state["Home"]["Flex119"]);
const Flex119Cb = useFlex119Cb()
const Div216Props = useStore((state)=>state["Home"]["Div216"]);
const Div216IoProps = useIoStore((state)=>state["Home"]["Div216"]);
const Div216Cb = useDiv216Cb()
const Div217Props = useStore((state)=>state["Home"]["Div217"]);
const Div217IoProps = useIoStore((state)=>state["Home"]["Div217"]);
const Div217Cb = useDiv217Cb()
const Div210Props = useStore((state)=>state["Home"]["Div210"]);
const Div210IoProps = useIoStore((state)=>state["Home"]["Div210"]);
const Div210Cb = useDiv210Cb()
const Div211Props = useStore((state)=>state["Home"]["Div211"]);
const Div211IoProps = useIoStore((state)=>state["Home"]["Div211"]);
const Div211Cb = useDiv211Cb()
const Div208Props = useStore((state)=>state["Home"]["Div208"]);
const Div208IoProps = useIoStore((state)=>state["Home"]["Div208"]);
const Div208Cb = useDiv208Cb()
const Div218Props = useStore((state)=>state["Home"]["Div218"]);
const Div218IoProps = useIoStore((state)=>state["Home"]["Div218"]);
const Div218Cb = useDiv218Cb()
const Div219Props = useStore((state)=>state["Home"]["Div219"]);
const Div219IoProps = useIoStore((state)=>state["Home"]["Div219"]);
const Div219Cb = useDiv219Cb()
const Flex121Props = useStore((state)=>state["Home"]["Flex121"]);
const Flex121IoProps = useIoStore((state)=>state["Home"]["Flex121"]);
const Flex121Cb = useFlex121Cb()
const Div220Props = useStore((state)=>state["Home"]["Div220"]);
const Div220IoProps = useIoStore((state)=>state["Home"]["Div220"]);
const Div220Cb = useDiv220Cb()
const Flex122Props = useStore((state)=>state["Home"]["Flex122"]);
const Flex122IoProps = useIoStore((state)=>state["Home"]["Flex122"]);
const Flex122Cb = useFlex122Cb()
const Div226Props = useStore((state)=>state["Home"]["Div226"]);
const Div226IoProps = useIoStore((state)=>state["Home"]["Div226"]);
const Div226Cb = useDiv226Cb()
const Flex128Props = useStore((state)=>state["Home"]["Flex128"]);
const Flex128IoProps = useIoStore((state)=>state["Home"]["Flex128"]);
const Flex128Cb = useFlex128Cb()
const Div227Props = useStore((state)=>state["Home"]["Div227"]);
const Div227IoProps = useIoStore((state)=>state["Home"]["Div227"]);
const Div227Cb = useDiv227Cb()
const Flex129Props = useStore((state)=>state["Home"]["Flex129"]);
const Flex129IoProps = useIoStore((state)=>state["Home"]["Flex129"]);
const Flex129Cb = useFlex129Cb()
const Div228Props = useStore((state)=>state["Home"]["Div228"]);
const Div228IoProps = useIoStore((state)=>state["Home"]["Div228"]);
const Div228Cb = useDiv228Cb()
const Flex130Props = useStore((state)=>state["Home"]["Flex130"]);
const Flex130IoProps = useIoStore((state)=>state["Home"]["Flex130"]);
const Flex130Cb = useFlex130Cb()
const Div229Props = useStore((state)=>state["Home"]["Div229"]);
const Div229IoProps = useIoStore((state)=>state["Home"]["Div229"]);
const Div229Cb = useDiv229Cb()
const Flex131Props = useStore((state)=>state["Home"]["Flex131"]);
const Flex131IoProps = useIoStore((state)=>state["Home"]["Flex131"]);
const Flex131Cb = useFlex131Cb()
const Div230Props = useStore((state)=>state["Home"]["Div230"]);
const Div230IoProps = useIoStore((state)=>state["Home"]["Div230"]);
const Div230Cb = useDiv230Cb()
const Flex132Props = useStore((state)=>state["Home"]["Flex132"]);
const Flex132IoProps = useIoStore((state)=>state["Home"]["Flex132"]);
const Flex132Cb = useFlex132Cb()
const Div231Props = useStore((state)=>state["Home"]["Div231"]);
const Div231IoProps = useIoStore((state)=>state["Home"]["Div231"]);
const Div231Cb = useDiv231Cb()
const Flex133Props = useStore((state)=>state["Home"]["Flex133"]);
const Flex133IoProps = useIoStore((state)=>state["Home"]["Flex133"]);
const Flex133Cb = useFlex133Cb()
const Div232Props = useStore((state)=>state["Home"]["Div232"]);
const Div232IoProps = useIoStore((state)=>state["Home"]["Div232"]);
const Div232Cb = useDiv232Cb()
const Flex135Props = useStore((state)=>state["Home"]["Flex135"]);
const Flex135IoProps = useIoStore((state)=>state["Home"]["Flex135"]);
const Flex135Cb = useFlex135Cb()
const Div235Props = useStore((state)=>state["Home"]["Div235"]);
const Div235IoProps = useIoStore((state)=>state["Home"]["Div235"]);
const Div235Cb = useDiv235Cb()
const Flex134Props = useStore((state)=>state["Home"]["Flex134"]);
const Flex134IoProps = useIoStore((state)=>state["Home"]["Flex134"]);
const Flex134Cb = useFlex134Cb()
const Div233Props = useStore((state)=>state["Home"]["Div233"]);
const Div233IoProps = useIoStore((state)=>state["Home"]["Div233"]);
const Div233Cb = useDiv233Cb()
const Div234Props = useStore((state)=>state["Home"]["Div234"]);
const Div234IoProps = useIoStore((state)=>state["Home"]["Div234"]);
const Div234Cb = useDiv234Cb()
const Div236Props = useStore((state)=>state["Home"]["Div236"]);
const Div236IoProps = useIoStore((state)=>state["Home"]["Div236"]);
const Div236Cb = useDiv236Cb()
const Flex136Props = useStore((state)=>state["Home"]["Flex136"]);
const Flex136IoProps = useIoStore((state)=>state["Home"]["Flex136"]);
const Flex136Cb = useFlex136Cb()
const Div237Props = useStore((state)=>state["Home"]["Div237"]);
const Div237IoProps = useIoStore((state)=>state["Home"]["Div237"]);
const Div237Cb = useDiv237Cb()
const Div238Props = useStore((state)=>state["Home"]["Div238"]);
const Div238IoProps = useIoStore((state)=>state["Home"]["Div238"]);
const Div238Cb = useDiv238Cb()
const Div239Props = useStore((state)=>state["Home"]["Div239"]);
const Div239IoProps = useIoStore((state)=>state["Home"]["Div239"]);
const Div239Cb = useDiv239Cb()
const Flex137Props = useStore((state)=>state["Home"]["Flex137"]);
const Flex137IoProps = useIoStore((state)=>state["Home"]["Flex137"]);
const Flex137Cb = useFlex137Cb()
const Div240Props = useStore((state)=>state["Home"]["Div240"]);
const Div240IoProps = useIoStore((state)=>state["Home"]["Div240"]);
const Div240Cb = useDiv240Cb()
const Div241Props = useStore((state)=>state["Home"]["Div241"]);
const Div241IoProps = useIoStore((state)=>state["Home"]["Div241"]);
const Div241Cb = useDiv241Cb()
const Div242Props = useStore((state)=>state["Home"]["Div242"]);
const Div242IoProps = useIoStore((state)=>state["Home"]["Div242"]);
const Div242Cb = useDiv242Cb()
const Div243Props = useStore((state)=>state["Home"]["Div243"]);
const Div243IoProps = useIoStore((state)=>state["Home"]["Div243"]);
const Div243Cb = useDiv243Cb()
const Div244Props = useStore((state)=>state["Home"]["Div244"]);
const Div244IoProps = useIoStore((state)=>state["Home"]["Div244"]);
const Div244Cb = useDiv244Cb()
const Flex138Props = useStore((state)=>state["Home"]["Flex138"]);
const Flex138IoProps = useIoStore((state)=>state["Home"]["Flex138"]);
const Flex138Cb = useFlex138Cb()
const Div245Props = useStore((state)=>state["Home"]["Div245"]);
const Div245IoProps = useIoStore((state)=>state["Home"]["Div245"]);
const Div245Cb = useDiv245Cb()
const Flex140Props = useStore((state)=>state["Home"]["Flex140"]);
const Flex140IoProps = useIoStore((state)=>state["Home"]["Flex140"]);
const Flex140Cb = useFlex140Cb()
const Flex141Props = useStore((state)=>state["Home"]["Flex141"]);
const Flex141IoProps = useIoStore((state)=>state["Home"]["Flex141"]);
const Flex141Cb = useFlex141Cb()
const Div246Props = useStore((state)=>state["Home"]["Div246"]);
const Div246IoProps = useIoStore((state)=>state["Home"]["Div246"]);
const Div246Cb = useDiv246Cb()
const Flex142Props = useStore((state)=>state["Home"]["Flex142"]);
const Flex142IoProps = useIoStore((state)=>state["Home"]["Flex142"]);
const Flex142Cb = useFlex142Cb()
const Div252Props = useStore((state)=>state["Home"]["Div252"]);
const Div252IoProps = useIoStore((state)=>state["Home"]["Div252"]);
const Div252Cb = useDiv252Cb()
const Flex143Props = useStore((state)=>state["Home"]["Flex143"]);
const Flex143IoProps = useIoStore((state)=>state["Home"]["Flex143"]);
const Flex143Cb = useFlex143Cb()
const Div253Props = useStore((state)=>state["Home"]["Div253"]);
const Div253IoProps = useIoStore((state)=>state["Home"]["Div253"]);
const Div253Cb = useDiv253Cb()
const Flex146Props = useStore((state)=>state["Home"]["Flex146"]);
const Flex146IoProps = useIoStore((state)=>state["Home"]["Flex146"]);
const Flex146Cb = useFlex146Cb()
const Div247Props = useStore((state)=>state["Home"]["Div247"]);
const Div247IoProps = useIoStore((state)=>state["Home"]["Div247"]);
const Div247Cb = useDiv247Cb()
const Flex139Props = useStore((state)=>state["Home"]["Flex139"]);
const Flex139IoProps = useIoStore((state)=>state["Home"]["Flex139"]);
const Flex139Cb = useFlex139Cb()
const Div248Props = useStore((state)=>state["Home"]["Div248"]);
const Div248IoProps = useIoStore((state)=>state["Home"]["Div248"]);
const Div248Cb = useDiv248Cb()
const Div249Props = useStore((state)=>state["Home"]["Div249"]);
const Div249IoProps = useIoStore((state)=>state["Home"]["Div249"]);
const Div249Cb = useDiv249Cb()
const Div250Props = useStore((state)=>state["Home"]["Div250"]);
const Div250IoProps = useIoStore((state)=>state["Home"]["Div250"]);
const Div250Cb = useDiv250Cb()
const Div251Props = useStore((state)=>state["Home"]["Div251"]);
const Div251IoProps = useIoStore((state)=>state["Home"]["Div251"]);
const Div251Cb = useDiv251Cb()
const LogoProps = useStore((state)=>state["Home"]["Logo"]);
const LogoIoProps = useIoStore((state)=>state["Home"]["Logo"]);
const LogoCb = useLogoCb()
const Home_linkProps = useStore((state)=>state["Home"]["Home_link"]);
const Home_linkIoProps = useIoStore((state)=>state["Home"]["Home_link"]);
const Home_linkCb = useHome_linkCb()
const AboutProps = useStore((state)=>state["Home"]["About"]);
const AboutIoProps = useIoStore((state)=>state["Home"]["About"]);
const AboutCb = useAboutCb()
const menuProps = useStore((state)=>state["Home"]["menu"]);
const menuIoProps = useIoStore((state)=>state["Home"]["menu"]);
const menuCb = usemenuCb()
const PagesProps = useStore((state)=>state["Home"]["Pages"]);
const PagesIoProps = useIoStore((state)=>state["Home"]["Pages"]);
const PagesCb = usePagesCb()
const CartProps = useStore((state)=>state["Home"]["Cart"]);
const CartIoProps = useIoStore((state)=>state["Home"]["Cart"]);
const CartCb = useCartCb()
const Order_OnlineProps = useStore((state)=>state["Home"]["Order_Online"]);
const Order_OnlineIoProps = useIoStore((state)=>state["Home"]["Order_Online"]);
const Order_OnlineCb = useOrder_OnlineCb()
const ReservateProps = useStore((state)=>state["Home"]["Reservate"]);
const ReservateIoProps = useIoStore((state)=>state["Home"]["Reservate"]);
const ReservateCb = useReservateCb()
const TextBox12Props = useStore((state)=>state["Home"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["Home"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const grub_hubProps = useStore((state)=>state["Home"]["grub_hub"]);
const grub_hubIoProps = useIoStore((state)=>state["Home"]["grub_hub"]);
const grub_hubCb = usegrub_hubCb()
const PostmatesProps = useStore((state)=>state["Home"]["Postmates"]);
const PostmatesIoProps = useIoStore((state)=>state["Home"]["Postmates"]);
const PostmatesCb = usePostmatesCb()
const DoordashProps = useStore((state)=>state["Home"]["Doordash"]);
const DoordashIoProps = useIoStore((state)=>state["Home"]["Doordash"]);
const DoordashCb = useDoordashCb()
const RappingProps = useStore((state)=>state["Home"]["Rapping"]);
const RappingIoProps = useIoStore((state)=>state["Home"]["Rapping"]);
const RappingCb = useRappingCb()
const Menu_TextProps = useStore((state)=>state["Home"]["Menu_Text"]);
const Menu_TextIoProps = useIoStore((state)=>state["Home"]["Menu_Text"]);
const Menu_TextCb = useMenu_TextCb()
const Image10Props = useStore((state)=>state["Home"]["Image10"]);
const Image10IoProps = useIoStore((state)=>state["Home"]["Image10"]);
const Image10Cb = useImage10Cb()
const breakfastProps = useStore((state)=>state["Home"]["breakfast"]);
const breakfastIoProps = useIoStore((state)=>state["Home"]["breakfast"]);
const breakfastCb = usebreakfastCb()
const LoremProps = useStore((state)=>state["Home"]["Lorem"]);
const LoremIoProps = useIoStore((state)=>state["Home"]["Lorem"]);
const LoremCb = useLoremCb()
const TextBox39Props = useStore((state)=>state["Home"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["Home"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const TextBox26Props = useStore((state)=>state["Home"]["TextBox26"]);
const TextBox26IoProps = useIoStore((state)=>state["Home"]["TextBox26"]);
const TextBox26Cb = useTextBox26Cb()
const TextBox27Props = useStore((state)=>state["Home"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["Home"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const Image16Props = useStore((state)=>state["Home"]["Image16"]);
const Image16IoProps = useIoStore((state)=>state["Home"]["Image16"]);
const Image16Cb = useImage16Cb()
const TextBox40Props = useStore((state)=>state["Home"]["TextBox40"]);
const TextBox40IoProps = useIoStore((state)=>state["Home"]["TextBox40"]);
const TextBox40Cb = useTextBox40Cb()
const TextBox28Props = useStore((state)=>state["Home"]["TextBox28"]);
const TextBox28IoProps = useIoStore((state)=>state["Home"]["TextBox28"]);
const TextBox28Cb = useTextBox28Cb()
const TextBox29Props = useStore((state)=>state["Home"]["TextBox29"]);
const TextBox29IoProps = useIoStore((state)=>state["Home"]["TextBox29"]);
const TextBox29Cb = useTextBox29Cb()
const Image17Props = useStore((state)=>state["Home"]["Image17"]);
const Image17IoProps = useIoStore((state)=>state["Home"]["Image17"]);
const Image17Cb = useImage17Cb()
const TextBox41Props = useStore((state)=>state["Home"]["TextBox41"]);
const TextBox41IoProps = useIoStore((state)=>state["Home"]["TextBox41"]);
const TextBox41Cb = useTextBox41Cb()
const TextBox30Props = useStore((state)=>state["Home"]["TextBox30"]);
const TextBox30IoProps = useIoStore((state)=>state["Home"]["TextBox30"]);
const TextBox30Cb = useTextBox30Cb()
const TextBox31Props = useStore((state)=>state["Home"]["TextBox31"]);
const TextBox31IoProps = useIoStore((state)=>state["Home"]["TextBox31"]);
const TextBox31Cb = useTextBox31Cb()
const Image18Props = useStore((state)=>state["Home"]["Image18"]);
const Image18IoProps = useIoStore((state)=>state["Home"]["Image18"]);
const Image18Cb = useImage18Cb()
const TextBox42Props = useStore((state)=>state["Home"]["TextBox42"]);
const TextBox42IoProps = useIoStore((state)=>state["Home"]["TextBox42"]);
const TextBox42Cb = useTextBox42Cb()
const Button6Props = useStore((state)=>state["Home"]["Button6"]);
const Button6IoProps = useIoStore((state)=>state["Home"]["Button6"]);
const Button6Cb = useButton6Cb()
const Button9Props = useStore((state)=>state["Home"]["Button9"]);
const Button9IoProps = useIoStore((state)=>state["Home"]["Button9"]);
const Button9Cb = useButton9Cb()
const Image19Props = useStore((state)=>state["Home"]["Image19"]);
const Image19IoProps = useIoStore((state)=>state["Home"]["Image19"]);
const Image19Cb = useImage19Cb()
const TextBox35Props = useStore((state)=>state["Home"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["Home"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const AddressProps = useStore((state)=>state["Home"]["Address"]);
const AddressIoProps = useIoStore((state)=>state["Home"]["Address"]);
const AddressCb = useAddressCb()
const Image21Props = useStore((state)=>state["Home"]["Image21"]);
const Image21IoProps = useIoStore((state)=>state["Home"]["Image21"]);
const Image21Cb = useImage21Cb()
const Image22Props = useStore((state)=>state["Home"]["Image22"]);
const Image22IoProps = useIoStore((state)=>state["Home"]["Image22"]);
const Image22Cb = useImage22Cb()
const TextBox37Props = useStore((state)=>state["Home"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["Home"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const Image23Props = useStore((state)=>state["Home"]["Image23"]);
const Image23IoProps = useIoStore((state)=>state["Home"]["Image23"]);
const Image23Cb = useImage23Cb()
const TextBox38Props = useStore((state)=>state["Home"]["TextBox38"]);
const TextBox38IoProps = useIoStore((state)=>state["Home"]["TextBox38"]);
const TextBox38Cb = useTextBox38Cb()
const About_UsProps = useStore((state)=>state["Home"]["About_Us"]);
const About_UsIoProps = useIoStore((state)=>state["Home"]["About_Us"]);
const About_UsCb = useAbout_UsCb()
const Lorem_aboutProps = useStore((state)=>state["Home"]["Lorem_about"]);
const Lorem_aboutIoProps = useIoStore((state)=>state["Home"]["Lorem_about"]);
const Lorem_aboutCb = useLorem_aboutCb()
const Button7Props = useStore((state)=>state["Home"]["Button7"]);
const Button7IoProps = useIoStore((state)=>state["Home"]["Button7"]);
const Button7Cb = useButton7Cb()
const Button8Props = useStore((state)=>state["Home"]["Button8"]);
const Button8IoProps = useIoStore((state)=>state["Home"]["Button8"]);
const Button8Cb = useButton8Cb()
const Items_TitleProps = useStore((state)=>state["Home"]["Items_Title"]);
const Items_TitleIoProps = useIoStore((state)=>state["Home"]["Items_Title"]);
const Items_TitleCb = useItems_TitleCb()
const descProps = useStore((state)=>state["Home"]["desc"]);
const descIoProps = useIoStore((state)=>state["Home"]["desc"]);
const descCb = usedescCb()
const TextBox46Props = useStore((state)=>state["Home"]["TextBox46"]);
const TextBox46IoProps = useIoStore((state)=>state["Home"]["TextBox46"]);
const TextBox46Cb = useTextBox46Cb()
const ItemProps = useStore((state)=>state["Home"]["Item"]);
const ItemIoProps = useIoStore((state)=>state["Home"]["Item"]);
const ItemCb = useItemCb()
const Image24Props = useStore((state)=>state["Home"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["Home"]["Image24"]);
const Image24Cb = useImage24Cb()
const PriceProps = useStore((state)=>state["Home"]["Price"]);
const PriceIoProps = useIoStore((state)=>state["Home"]["Price"]);
const PriceCb = usePriceCb()
const TextBox91Props = useStore((state)=>state["Home"]["TextBox91"]);
const TextBox91IoProps = useIoStore((state)=>state["Home"]["TextBox91"]);
const TextBox91Cb = useTextBox91Cb()
const TextBox92Props = useStore((state)=>state["Home"]["TextBox92"]);
const TextBox92IoProps = useIoStore((state)=>state["Home"]["TextBox92"]);
const TextBox92Cb = useTextBox92Cb()
const Image39Props = useStore((state)=>state["Home"]["Image39"]);
const Image39IoProps = useIoStore((state)=>state["Home"]["Image39"]);
const Image39Cb = useImage39Cb()
const TextBox90Props = useStore((state)=>state["Home"]["TextBox90"]);
const TextBox90IoProps = useIoStore((state)=>state["Home"]["TextBox90"]);
const TextBox90Cb = useTextBox90Cb()
const TextBox94Props = useStore((state)=>state["Home"]["TextBox94"]);
const TextBox94IoProps = useIoStore((state)=>state["Home"]["TextBox94"]);
const TextBox94Cb = useTextBox94Cb()
const TextBox95Props = useStore((state)=>state["Home"]["TextBox95"]);
const TextBox95IoProps = useIoStore((state)=>state["Home"]["TextBox95"]);
const TextBox95Cb = useTextBox95Cb()
const Image40Props = useStore((state)=>state["Home"]["Image40"]);
const Image40IoProps = useIoStore((state)=>state["Home"]["Image40"]);
const Image40Cb = useImage40Cb()
const TextBox93Props = useStore((state)=>state["Home"]["TextBox93"]);
const TextBox93IoProps = useIoStore((state)=>state["Home"]["TextBox93"]);
const TextBox93Cb = useTextBox93Cb()
const TextBox97Props = useStore((state)=>state["Home"]["TextBox97"]);
const TextBox97IoProps = useIoStore((state)=>state["Home"]["TextBox97"]);
const TextBox97Cb = useTextBox97Cb()
const TextBox98Props = useStore((state)=>state["Home"]["TextBox98"]);
const TextBox98IoProps = useIoStore((state)=>state["Home"]["TextBox98"]);
const TextBox98Cb = useTextBox98Cb()
const Image41Props = useStore((state)=>state["Home"]["Image41"]);
const Image41IoProps = useIoStore((state)=>state["Home"]["Image41"]);
const Image41Cb = useImage41Cb()
const TextBox96Props = useStore((state)=>state["Home"]["TextBox96"]);
const TextBox96IoProps = useIoStore((state)=>state["Home"]["TextBox96"]);
const TextBox96Cb = useTextBox96Cb()
const TextBox100Props = useStore((state)=>state["Home"]["TextBox100"]);
const TextBox100IoProps = useIoStore((state)=>state["Home"]["TextBox100"]);
const TextBox100Cb = useTextBox100Cb()
const TextBox101Props = useStore((state)=>state["Home"]["TextBox101"]);
const TextBox101IoProps = useIoStore((state)=>state["Home"]["TextBox101"]);
const TextBox101Cb = useTextBox101Cb()
const Image42Props = useStore((state)=>state["Home"]["Image42"]);
const Image42IoProps = useIoStore((state)=>state["Home"]["Image42"]);
const Image42Cb = useImage42Cb()
const TextBox99Props = useStore((state)=>state["Home"]["TextBox99"]);
const TextBox99IoProps = useIoStore((state)=>state["Home"]["TextBox99"]);
const TextBox99Cb = useTextBox99Cb()
const TextBox103Props = useStore((state)=>state["Home"]["TextBox103"]);
const TextBox103IoProps = useIoStore((state)=>state["Home"]["TextBox103"]);
const TextBox103Cb = useTextBox103Cb()
const TextBox104Props = useStore((state)=>state["Home"]["TextBox104"]);
const TextBox104IoProps = useIoStore((state)=>state["Home"]["TextBox104"]);
const TextBox104Cb = useTextBox104Cb()
const Image43Props = useStore((state)=>state["Home"]["Image43"]);
const Image43IoProps = useIoStore((state)=>state["Home"]["Image43"]);
const Image43Cb = useImage43Cb()
const TextBox102Props = useStore((state)=>state["Home"]["TextBox102"]);
const TextBox102IoProps = useIoStore((state)=>state["Home"]["TextBox102"]);
const TextBox102Cb = useTextBox102Cb()
const TextBox106Props = useStore((state)=>state["Home"]["TextBox106"]);
const TextBox106IoProps = useIoStore((state)=>state["Home"]["TextBox106"]);
const TextBox106Cb = useTextBox106Cb()
const TextBox107Props = useStore((state)=>state["Home"]["TextBox107"]);
const TextBox107IoProps = useIoStore((state)=>state["Home"]["TextBox107"]);
const TextBox107Cb = useTextBox107Cb()
const Image44Props = useStore((state)=>state["Home"]["Image44"]);
const Image44IoProps = useIoStore((state)=>state["Home"]["Image44"]);
const Image44Cb = useImage44Cb()
const TextBox105Props = useStore((state)=>state["Home"]["TextBox105"]);
const TextBox105IoProps = useIoStore((state)=>state["Home"]["TextBox105"]);
const TextBox105Cb = useTextBox105Cb()
const TextBox109Props = useStore((state)=>state["Home"]["TextBox109"]);
const TextBox109IoProps = useIoStore((state)=>state["Home"]["TextBox109"]);
const TextBox109Cb = useTextBox109Cb()
const TextBox110Props = useStore((state)=>state["Home"]["TextBox110"]);
const TextBox110IoProps = useIoStore((state)=>state["Home"]["TextBox110"]);
const TextBox110Cb = useTextBox110Cb()
const Image45Props = useStore((state)=>state["Home"]["Image45"]);
const Image45IoProps = useIoStore((state)=>state["Home"]["Image45"]);
const Image45Cb = useImage45Cb()
const TextBox108Props = useStore((state)=>state["Home"]["TextBox108"]);
const TextBox108IoProps = useIoStore((state)=>state["Home"]["TextBox108"]);
const TextBox108Cb = useTextBox108Cb()
const Button10Props = useStore((state)=>state["Home"]["Button10"]);
const Button10IoProps = useIoStore((state)=>state["Home"]["Button10"]);
const Button10Cb = useButton10Cb()
const Button11Props = useStore((state)=>state["Home"]["Button11"]);
const Button11IoProps = useIoStore((state)=>state["Home"]["Button11"]);
const Button11Cb = useButton11Cb()
const TextBox111Props = useStore((state)=>state["Home"]["TextBox111"]);
const TextBox111IoProps = useIoStore((state)=>state["Home"]["TextBox111"]);
const TextBox111Cb = useTextBox111Cb()
const TextBox112Props = useStore((state)=>state["Home"]["TextBox112"]);
const TextBox112IoProps = useIoStore((state)=>state["Home"]["TextBox112"]);
const TextBox112Cb = useTextBox112Cb()
const Button12Props = useStore((state)=>state["Home"]["Button12"]);
const Button12IoProps = useIoStore((state)=>state["Home"]["Button12"]);
const Button12Cb = useButton12Cb()
const Button13Props = useStore((state)=>state["Home"]["Button13"]);
const Button13IoProps = useIoStore((state)=>state["Home"]["Button13"]);
const Button13Cb = useButton13Cb()
const Image47Props = useStore((state)=>state["Home"]["Image47"]);
const Image47IoProps = useIoStore((state)=>state["Home"]["Image47"]);
const Image47Cb = useImage47Cb()
const Image52Props = useStore((state)=>state["Home"]["Image52"]);
const Image52IoProps = useIoStore((state)=>state["Home"]["Image52"]);
const Image52Cb = useImage52Cb()
const TextBox124Props = useStore((state)=>state["Home"]["TextBox124"]);
const TextBox124IoProps = useIoStore((state)=>state["Home"]["TextBox124"]);
const TextBox124Cb = useTextBox124Cb()
const TextBox125Props = useStore((state)=>state["Home"]["TextBox125"]);
const TextBox125IoProps = useIoStore((state)=>state["Home"]["TextBox125"]);
const TextBox125Cb = useTextBox125Cb()
const TextBox126Props = useStore((state)=>state["Home"]["TextBox126"]);
const TextBox126IoProps = useIoStore((state)=>state["Home"]["TextBox126"]);
const TextBox126Cb = useTextBox126Cb()
const Button20Props = useStore((state)=>state["Home"]["Button20"]);
const Button20IoProps = useIoStore((state)=>state["Home"]["Button20"]);
const Button20Cb = useButton20Cb()
const Button21Props = useStore((state)=>state["Home"]["Button21"]);
const Button21IoProps = useIoStore((state)=>state["Home"]["Button21"]);
const Button21Cb = useButton21Cb()
const Div177Props = useStore((state)=>state["Home"]["Div177"]);
const Div177IoProps = useIoStore((state)=>state["Home"]["Div177"]);
const Div177Cb = useDiv177Cb()
const Div178Props = useStore((state)=>state["Home"]["Div178"]);
const Div178IoProps = useIoStore((state)=>state["Home"]["Div178"]);
const Div178Cb = useDiv178Cb()
const TextBox127Props = useStore((state)=>state["Home"]["TextBox127"]);
const TextBox127IoProps = useIoStore((state)=>state["Home"]["TextBox127"]);
const TextBox127Cb = useTextBox127Cb()
const TextBox128Props = useStore((state)=>state["Home"]["TextBox128"]);
const TextBox128IoProps = useIoStore((state)=>state["Home"]["TextBox128"]);
const TextBox128Cb = useTextBox128Cb()
const Image53Props = useStore((state)=>state["Home"]["Image53"]);
const Image53IoProps = useIoStore((state)=>state["Home"]["Image53"]);
const Image53Cb = useImage53Cb()
const TextBox129Props = useStore((state)=>state["Home"]["TextBox129"]);
const TextBox129IoProps = useIoStore((state)=>state["Home"]["TextBox129"]);
const TextBox129Cb = useTextBox129Cb()
const TextBox130Props = useStore((state)=>state["Home"]["TextBox130"]);
const TextBox130IoProps = useIoStore((state)=>state["Home"]["TextBox130"]);
const TextBox130Cb = useTextBox130Cb()
const Image56Props = useStore((state)=>state["Home"]["Image56"]);
const Image56IoProps = useIoStore((state)=>state["Home"]["Image56"]);
const Image56Cb = useImage56Cb()
const Image57Props = useStore((state)=>state["Home"]["Image57"]);
const Image57IoProps = useIoStore((state)=>state["Home"]["Image57"]);
const Image57Cb = useImage57Cb()
const Image58Props = useStore((state)=>state["Home"]["Image58"]);
const Image58IoProps = useIoStore((state)=>state["Home"]["Image58"]);
const Image58Cb = useImage58Cb()
const Image59Props = useStore((state)=>state["Home"]["Image59"]);
const Image59IoProps = useIoStore((state)=>state["Home"]["Image59"]);
const Image59Cb = useImage59Cb()
const Image60Props = useStore((state)=>state["Home"]["Image60"]);
const Image60IoProps = useIoStore((state)=>state["Home"]["Image60"]);
const Image60Cb = useImage60Cb()
const Image61Props = useStore((state)=>state["Home"]["Image61"]);
const Image61IoProps = useIoStore((state)=>state["Home"]["Image61"]);
const Image61Cb = useImage61Cb()
const TextBox132Props = useStore((state)=>state["Home"]["TextBox132"]);
const TextBox132IoProps = useIoStore((state)=>state["Home"]["TextBox132"]);
const TextBox132Cb = useTextBox132Cb()
const TextBox131Props = useStore((state)=>state["Home"]["TextBox131"]);
const TextBox131IoProps = useIoStore((state)=>state["Home"]["TextBox131"]);
const TextBox131Cb = useTextBox131Cb()
const Image54Props = useStore((state)=>state["Home"]["Image54"]);
const Image54IoProps = useIoStore((state)=>state["Home"]["Image54"]);
const Image54Cb = useImage54Cb()
const Button24Props = useStore((state)=>state["Home"]["Button24"]);
const Button24IoProps = useIoStore((state)=>state["Home"]["Button24"]);
const Button24Cb = useButton24Cb()
const Button25Props = useStore((state)=>state["Home"]["Button25"]);
const Button25IoProps = useIoStore((state)=>state["Home"]["Button25"]);
const Button25Cb = useButton25Cb()
const TextBox133Props = useStore((state)=>state["Home"]["TextBox133"]);
const TextBox133IoProps = useIoStore((state)=>state["Home"]["TextBox133"]);
const TextBox133Cb = useTextBox133Cb()
const Button26Props = useStore((state)=>state["Home"]["Button26"]);
const Button26IoProps = useIoStore((state)=>state["Home"]["Button26"]);
const Button26Cb = useButton26Cb()
const TextBox134Props = useStore((state)=>state["Home"]["TextBox134"]);
const TextBox134IoProps = useIoStore((state)=>state["Home"]["TextBox134"]);
const TextBox134Cb = useTextBox134Cb()
const TextBox135Props = useStore((state)=>state["Home"]["TextBox135"]);
const TextBox135IoProps = useIoStore((state)=>state["Home"]["TextBox135"]);
const TextBox135Cb = useTextBox135Cb()
const TextBox136Props = useStore((state)=>state["Home"]["TextBox136"]);
const TextBox136IoProps = useIoStore((state)=>state["Home"]["TextBox136"]);
const TextBox136Cb = useTextBox136Cb()
const Image62Props = useStore((state)=>state["Home"]["Image62"]);
const Image62IoProps = useIoStore((state)=>state["Home"]["Image62"]);
const Image62Cb = useImage62Cb()
const TextBox138Props = useStore((state)=>state["Home"]["TextBox138"]);
const TextBox138IoProps = useIoStore((state)=>state["Home"]["TextBox138"]);
const TextBox138Cb = useTextBox138Cb()
const TextBox139Props = useStore((state)=>state["Home"]["TextBox139"]);
const TextBox139IoProps = useIoStore((state)=>state["Home"]["TextBox139"]);
const TextBox139Cb = useTextBox139Cb()
const Image63Props = useStore((state)=>state["Home"]["Image63"]);
const Image63IoProps = useIoStore((state)=>state["Home"]["Image63"]);
const Image63Cb = useImage63Cb()
const TextBox170Props = useStore((state)=>state["Home"]["TextBox170"]);
const TextBox170IoProps = useIoStore((state)=>state["Home"]["TextBox170"]);
const TextBox170Cb = useTextBox170Cb()
const TextBox171Props = useStore((state)=>state["Home"]["TextBox171"]);
const TextBox171IoProps = useIoStore((state)=>state["Home"]["TextBox171"]);
const TextBox171Cb = useTextBox171Cb()
const Image79Props = useStore((state)=>state["Home"]["Image79"]);
const Image79IoProps = useIoStore((state)=>state["Home"]["Image79"]);
const Image79Cb = useImage79Cb()
const TextBox172Props = useStore((state)=>state["Home"]["TextBox172"]);
const TextBox172IoProps = useIoStore((state)=>state["Home"]["TextBox172"]);
const TextBox172Cb = useTextBox172Cb()
const TextBox173Props = useStore((state)=>state["Home"]["TextBox173"]);
const TextBox173IoProps = useIoStore((state)=>state["Home"]["TextBox173"]);
const TextBox173Cb = useTextBox173Cb()
const Image80Props = useStore((state)=>state["Home"]["Image80"]);
const Image80IoProps = useIoStore((state)=>state["Home"]["Image80"]);
const Image80Cb = useImage80Cb()
const TextBox174Props = useStore((state)=>state["Home"]["TextBox174"]);
const TextBox174IoProps = useIoStore((state)=>state["Home"]["TextBox174"]);
const TextBox174Cb = useTextBox174Cb()
const TextBox175Props = useStore((state)=>state["Home"]["TextBox175"]);
const TextBox175IoProps = useIoStore((state)=>state["Home"]["TextBox175"]);
const TextBox175Cb = useTextBox175Cb()
const Image81Props = useStore((state)=>state["Home"]["Image81"]);
const Image81IoProps = useIoStore((state)=>state["Home"]["Image81"]);
const Image81Cb = useImage81Cb()
const TextBox176Props = useStore((state)=>state["Home"]["TextBox176"]);
const TextBox176IoProps = useIoStore((state)=>state["Home"]["TextBox176"]);
const TextBox176Cb = useTextBox176Cb()
const Image82Props = useStore((state)=>state["Home"]["Image82"]);
const Image82IoProps = useIoStore((state)=>state["Home"]["Image82"]);
const Image82Cb = useImage82Cb()
const TextBox177Props = useStore((state)=>state["Home"]["TextBox177"]);
const TextBox177IoProps = useIoStore((state)=>state["Home"]["TextBox177"]);
const TextBox177Cb = useTextBox177Cb()
const Image83Props = useStore((state)=>state["Home"]["Image83"]);
const Image83IoProps = useIoStore((state)=>state["Home"]["Image83"]);
const Image83Cb = useImage83Cb()
const Image84Props = useStore((state)=>state["Home"]["Image84"]);
const Image84IoProps = useIoStore((state)=>state["Home"]["Image84"]);
const Image84Cb = useImage84Cb()
const TextBox178Props = useStore((state)=>state["Home"]["TextBox178"]);
const TextBox178IoProps = useIoStore((state)=>state["Home"]["TextBox178"]);
const TextBox178Cb = useTextBox178Cb()
const TextBox180Props = useStore((state)=>state["Home"]["TextBox180"]);
const TextBox180IoProps = useIoStore((state)=>state["Home"]["TextBox180"]);
const TextBox180Cb = useTextBox180Cb()
const TextBox179Props = useStore((state)=>state["Home"]["TextBox179"]);
const TextBox179IoProps = useIoStore((state)=>state["Home"]["TextBox179"]);
const TextBox179Cb = useTextBox179Cb()
const Button27Props = useStore((state)=>state["Home"]["Button27"]);
const Button27IoProps = useIoStore((state)=>state["Home"]["Button27"]);
const Button27Cb = useButton27Cb()
const TextBox181Props = useStore((state)=>state["Home"]["TextBox181"]);
const TextBox181IoProps = useIoStore((state)=>state["Home"]["TextBox181"]);
const TextBox181Cb = useTextBox181Cb()
const Input1Props = useStore((state)=>state["Home"]["Input1"]);
const Input1IoProps = useIoStore((state)=>state["Home"]["Input1"]);
const Input1Cb = useInput1Cb()
const Input7Props = useStore((state)=>state["Home"]["Input7"]);
const Input7IoProps = useIoStore((state)=>state["Home"]["Input7"]);
const Input7Cb = useInput7Cb()
const TextBox187Props = useStore((state)=>state["Home"]["TextBox187"]);
const TextBox187IoProps = useIoStore((state)=>state["Home"]["TextBox187"]);
const TextBox187Cb = useTextBox187Cb()
const Input8Props = useStore((state)=>state["Home"]["Input8"]);
const Input8IoProps = useIoStore((state)=>state["Home"]["Input8"]);
const Input8Cb = useInput8Cb()
const TextBox188Props = useStore((state)=>state["Home"]["TextBox188"]);
const TextBox188IoProps = useIoStore((state)=>state["Home"]["TextBox188"]);
const TextBox188Cb = useTextBox188Cb()
const Input9Props = useStore((state)=>state["Home"]["Input9"]);
const Input9IoProps = useIoStore((state)=>state["Home"]["Input9"]);
const Input9Cb = useInput9Cb()
const TextBox189Props = useStore((state)=>state["Home"]["TextBox189"]);
const TextBox189IoProps = useIoStore((state)=>state["Home"]["TextBox189"]);
const TextBox189Cb = useTextBox189Cb()
const Input10Props = useStore((state)=>state["Home"]["Input10"]);
const Input10IoProps = useIoStore((state)=>state["Home"]["Input10"]);
const Input10Cb = useInput10Cb()
const TextBox190Props = useStore((state)=>state["Home"]["TextBox190"]);
const TextBox190IoProps = useIoStore((state)=>state["Home"]["TextBox190"]);
const TextBox190Cb = useTextBox190Cb()
const Input11Props = useStore((state)=>state["Home"]["Input11"]);
const Input11IoProps = useIoStore((state)=>state["Home"]["Input11"]);
const Input11Cb = useInput11Cb()
const TextBox191Props = useStore((state)=>state["Home"]["TextBox191"]);
const TextBox191IoProps = useIoStore((state)=>state["Home"]["TextBox191"]);
const TextBox191Cb = useTextBox191Cb()
const TextBox192Props = useStore((state)=>state["Home"]["TextBox192"]);
const TextBox192IoProps = useIoStore((state)=>state["Home"]["TextBox192"]);
const TextBox192Cb = useTextBox192Cb()
const Input12Props = useStore((state)=>state["Home"]["Input12"]);
const Input12IoProps = useIoStore((state)=>state["Home"]["Input12"]);
const Input12Cb = useInput12Cb()
const Button28Props = useStore((state)=>state["Home"]["Button28"]);
const Button28IoProps = useIoStore((state)=>state["Home"]["Button28"]);
const Button28Cb = useButton28Cb()
const TextBox193Props = useStore((state)=>state["Home"]["TextBox193"]);
const TextBox193IoProps = useIoStore((state)=>state["Home"]["TextBox193"]);
const TextBox193Cb = useTextBox193Cb()
const Image85Props = useStore((state)=>state["Home"]["Image85"]);
const Image85IoProps = useIoStore((state)=>state["Home"]["Image85"]);
const Image85Cb = useImage85Cb()
const Image86Props = useStore((state)=>state["Home"]["Image86"]);
const Image86IoProps = useIoStore((state)=>state["Home"]["Image86"]);
const Image86Cb = useImage86Cb()
const Image87Props = useStore((state)=>state["Home"]["Image87"]);
const Image87IoProps = useIoStore((state)=>state["Home"]["Image87"]);
const Image87Cb = useImage87Cb()
const Image88Props = useStore((state)=>state["Home"]["Image88"]);
const Image88IoProps = useIoStore((state)=>state["Home"]["Image88"]);
const Image88Cb = useImage88Cb()
const Image89Props = useStore((state)=>state["Home"]["Image89"]);
const Image89IoProps = useIoStore((state)=>state["Home"]["Image89"]);
const Image89Cb = useImage89Cb()
const Image90Props = useStore((state)=>state["Home"]["Image90"]);
const Image90IoProps = useIoStore((state)=>state["Home"]["Image90"]);
const Image90Cb = useImage90Cb()
const TextBox195Props = useStore((state)=>state["Home"]["TextBox195"]);
const TextBox195IoProps = useIoStore((state)=>state["Home"]["TextBox195"]);
const TextBox195Cb = useTextBox195Cb()
const Image95Props = useStore((state)=>state["Home"]["Image95"]);
const Image95IoProps = useIoStore((state)=>state["Home"]["Image95"]);
const Image95Cb = useImage95Cb()
const Image96Props = useStore((state)=>state["Home"]["Image96"]);
const Image96IoProps = useIoStore((state)=>state["Home"]["Image96"]);
const Image96Cb = useImage96Cb()
const Image97Props = useStore((state)=>state["Home"]["Image97"]);
const Image97IoProps = useIoStore((state)=>state["Home"]["Image97"]);
const Image97Cb = useImage97Cb()
const Image98Props = useStore((state)=>state["Home"]["Image98"]);
const Image98IoProps = useIoStore((state)=>state["Home"]["Image98"]);
const Image98Cb = useImage98Cb()
const Image99Props = useStore((state)=>state["Home"]["Image99"]);
const Image99IoProps = useIoStore((state)=>state["Home"]["Image99"]);
const Image99Cb = useImage99Cb()
const Image100Props = useStore((state)=>state["Home"]["Image100"]);
const Image100IoProps = useIoStore((state)=>state["Home"]["Image100"]);
const Image100Cb = useImage100Cb()
const TextBox196Props = useStore((state)=>state["Home"]["TextBox196"]);
const TextBox196IoProps = useIoStore((state)=>state["Home"]["TextBox196"]);
const TextBox196Cb = useTextBox196Cb()
const TextBox197Props = useStore((state)=>state["Home"]["TextBox197"]);
const TextBox197IoProps = useIoStore((state)=>state["Home"]["TextBox197"]);
const TextBox197Cb = useTextBox197Cb()
const TextBox198Props = useStore((state)=>state["Home"]["TextBox198"]);
const TextBox198IoProps = useIoStore((state)=>state["Home"]["TextBox198"]);
const TextBox198Cb = useTextBox198Cb()
const TextBox199Props = useStore((state)=>state["Home"]["TextBox199"]);
const TextBox199IoProps = useIoStore((state)=>state["Home"]["TextBox199"]);
const TextBox199Cb = useTextBox199Cb()
const TextBox200Props = useStore((state)=>state["Home"]["TextBox200"]);
const TextBox200IoProps = useIoStore((state)=>state["Home"]["TextBox200"]);
const TextBox200Cb = useTextBox200Cb()
const TextBox201Props = useStore((state)=>state["Home"]["TextBox201"]);
const TextBox201IoProps = useIoStore((state)=>state["Home"]["TextBox201"]);
const TextBox201Cb = useTextBox201Cb()
const TextBox202Props = useStore((state)=>state["Home"]["TextBox202"]);
const TextBox202IoProps = useIoStore((state)=>state["Home"]["TextBox202"]);
const TextBox202Cb = useTextBox202Cb()
const TextBox203Props = useStore((state)=>state["Home"]["TextBox203"]);
const TextBox203IoProps = useIoStore((state)=>state["Home"]["TextBox203"]);
const TextBox203Cb = useTextBox203Cb()
const TextBox212Props = useStore((state)=>state["Home"]["TextBox212"]);
const TextBox212IoProps = useIoStore((state)=>state["Home"]["TextBox212"]);
const TextBox212Cb = useTextBox212Cb()
const TextBox213Props = useStore((state)=>state["Home"]["TextBox213"]);
const TextBox213IoProps = useIoStore((state)=>state["Home"]["TextBox213"]);
const TextBox213Cb = useTextBox213Cb()
const TextBox214Props = useStore((state)=>state["Home"]["TextBox214"]);
const TextBox214IoProps = useIoStore((state)=>state["Home"]["TextBox214"]);
const TextBox214Cb = useTextBox214Cb()
const TextBox215Props = useStore((state)=>state["Home"]["TextBox215"]);
const TextBox215IoProps = useIoStore((state)=>state["Home"]["TextBox215"]);
const TextBox215Cb = useTextBox215Cb()
const TextBox216Props = useStore((state)=>state["Home"]["TextBox216"]);
const TextBox216IoProps = useIoStore((state)=>state["Home"]["TextBox216"]);
const TextBox216Cb = useTextBox216Cb()
const TextBox217Props = useStore((state)=>state["Home"]["TextBox217"]);
const TextBox217IoProps = useIoStore((state)=>state["Home"]["TextBox217"]);
const TextBox217Cb = useTextBox217Cb()
const TextBox218Props = useStore((state)=>state["Home"]["TextBox218"]);
const TextBox218IoProps = useIoStore((state)=>state["Home"]["TextBox218"]);
const TextBox218Cb = useTextBox218Cb()
const TextBox219Props = useStore((state)=>state["Home"]["TextBox219"]);
const TextBox219IoProps = useIoStore((state)=>state["Home"]["TextBox219"]);
const TextBox219Cb = useTextBox219Cb()
const TextBox194Props = useStore((state)=>state["Home"]["TextBox194"]);
const TextBox194IoProps = useIoStore((state)=>state["Home"]["TextBox194"]);
const TextBox194Cb = useTextBox194Cb()
const Image91Props = useStore((state)=>state["Home"]["Image91"]);
const Image91IoProps = useIoStore((state)=>state["Home"]["Image91"]);
const Image91Cb = useImage91Cb()
const Image92Props = useStore((state)=>state["Home"]["Image92"]);
const Image92IoProps = useIoStore((state)=>state["Home"]["Image92"]);
const Image92Cb = useImage92Cb()
const Image93Props = useStore((state)=>state["Home"]["Image93"]);
const Image93IoProps = useIoStore((state)=>state["Home"]["Image93"]);
const Image93Cb = useImage93Cb()
const Image94Props = useStore((state)=>state["Home"]["Image94"]);
const Image94IoProps = useIoStore((state)=>state["Home"]["Image94"]);
const Image94Cb = useImage94Cb()

  return (<>
  <Div className="p-Home Main_Div bpt" {...Main_DivProps} {...Main_DivCb} {...Main_DivIoProps}>
<Div className="p-Home Navbar_Div bpt" {...Navbar_DivProps} {...Navbar_DivCb} {...Navbar_DivIoProps}>
<Flex className="p-Home navbar bpt" {...navbarProps} {...navbarCb} {...navbarIoProps}>
<Image className="p-Home Logo bpt" {...LogoProps} {...LogoCb} {...LogoIoProps}/>
<TextBox className="p-Home Home_link bpt" {...Home_linkProps} {...Home_linkCb} {...Home_linkIoProps}/>
<TextBox className="p-Home About bpt" {...AboutProps} {...AboutCb} {...AboutIoProps}/>
<TextBox className="p-Home menu bpt" {...menuProps} {...menuCb} {...menuIoProps}/>
<TextBox className="p-Home Pages bpt" {...PagesProps} {...PagesCb} {...PagesIoProps}/>
<TextBox className="p-Home Cart bpt" {...CartProps} {...CartCb} {...CartIoProps}/>
<Button className="p-Home Order_Online bpt" {...Order_OnlineProps} {...Order_OnlineCb} {...Order_OnlineIoProps}/>
<Button className="p-Home Reservate bpt" {...ReservateProps} {...ReservateCb} {...ReservateIoProps}/>
</Flex>
</Div>
<Div className="p-Home Div159 bpt" {...Div159Props} {...Div159Cb} {...Div159IoProps}>
<Flex className="p-Home Flex80 bpt" {...Flex80Props} {...Flex80Cb} {...Flex80IoProps}>
<Flex className="p-Home Flex79 bpt" {...Flex79Props} {...Flex79Cb} {...Flex79IoProps}>
<TextBox className="p-Home TextBox124 bpt" {...TextBox124Props} {...TextBox124Cb} {...TextBox124IoProps}/>
<TextBox className="p-Home TextBox125 bpt" {...TextBox125Props} {...TextBox125Cb} {...TextBox125IoProps}/>
<TextBox className="p-Home TextBox126 bpt" {...TextBox126Props} {...TextBox126Cb} {...TextBox126IoProps}/>
<Div className="p-Home Div157 bpt" {...Div157Props} {...Div157Cb} {...Div157IoProps}>
<Flex className="p-Home Flex78 bpt" {...Flex78Props} {...Flex78Cb} {...Flex78IoProps}>
<Button className="p-Home Button20 bpt" {...Button20Props} {...Button20Cb} {...Button20IoProps}/>
<Button className="p-Home Button21 bpt" {...Button21Props} {...Button21Cb} {...Button21IoProps}/>
</Flex>
</Div>
</Flex>
<Div className="p-Home Div158 bpt" {...Div158Props} {...Div158Cb} {...Div158IoProps}>
<Image className="p-Home Image52 bpt" {...Image52Props} {...Image52Cb} {...Image52IoProps}/>
</Div>
</Flex>
</Div>
<Flex className="p-Home App_flex bpt" {...App_flexProps} {...App_flexCb} {...App_flexIoProps}>
<Div className="p-Home Div13 bpt" {...Div13Props} {...Div13Cb} {...Div13IoProps}>
<TextBox className="p-Home TextBox12 bpt" {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
</Div>
<Flex className="p-Home App_logos_flex bpt" {...App_logos_flexProps} {...App_logos_flexCb} {...App_logos_flexIoProps}>
<Image className="p-Home Doordash bpt" {...DoordashProps} {...DoordashCb} {...DoordashIoProps}/>
<Image className="p-Home Postmates bpt" {...PostmatesProps} {...PostmatesCb} {...PostmatesIoProps}/>
<Image className="p-Home Rapping bpt" {...RappingProps} {...RappingCb} {...RappingIoProps}/>
<Image className="p-Home grub_hub bpt" {...grub_hubProps} {...grub_hubCb} {...grub_hubIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Menu_flex bpt" {...Menu_flexProps} {...Menu_flexCb} {...Menu_flexIoProps}>
<TextBox className="p-Home Menu_Text bpt" {...Menu_TextProps} {...Menu_TextCb} {...Menu_TextIoProps}/>
<Flex className="p-Home cards_flex bpt" {...cards_flexProps} {...cards_flexCb} {...cards_flexIoProps}>
<Div className="p-Home card1 bpt" {...card1Props} {...card1Cb} {...card1IoProps}>
<Flex className="p-Home c1 bpt" {...c1Props} {...c1Cb} {...c1IoProps}>
<Div className="p-Home Div23 bpt" {...Div23Props} {...Div23Cb} {...Div23IoProps}>
<Image className="p-Home Image10 bpt" {...Image10Props} {...Image10Cb} {...Image10IoProps}/>
<TextBox className="p-Home breakfast bpt" {...breakfastProps} {...breakfastCb} {...breakfastIoProps}/>
<TextBox className="p-Home Lorem bpt" {...LoremProps} {...LoremCb} {...LoremIoProps}/>
<TextBox className="p-Home TextBox39 bpt" {...TextBox39Props} {...TextBox39Cb} {...TextBox39IoProps}/>
</Div>
</Flex>
</Div>
<Div className="p-Home card2 bpt" {...card2Props} {...card2Cb} {...card2IoProps}>
<Flex className="p-Home Flex23 bpt" {...Flex23Props} {...Flex23Cb} {...Flex23IoProps}>
<Div className="p-Home Div34 bpt" {...Div34Props} {...Div34Cb} {...Div34IoProps}>
<Image className="p-Home Image16 bpt" {...Image16Props} {...Image16Cb} {...Image16IoProps}/>
<TextBox className="p-Home TextBox27 bpt" {...TextBox27Props} {...TextBox27Cb} {...TextBox27IoProps}/>
<TextBox className="p-Home TextBox26 bpt" {...TextBox26Props} {...TextBox26Cb} {...TextBox26IoProps}/>
<TextBox className="p-Home TextBox40 bpt" {...TextBox40Props} {...TextBox40Cb} {...TextBox40IoProps}/>
</Div>
</Flex>
</Div>
<Div className="p-Home card3 bpt" {...card3Props} {...card3Cb} {...card3IoProps}>
<Flex className="p-Home Flex24 bpt" {...Flex24Props} {...Flex24Cb} {...Flex24IoProps}>
<Div className="p-Home Div36 bpt" {...Div36Props} {...Div36Cb} {...Div36IoProps}>
<Image className="p-Home Image17 bpt" {...Image17Props} {...Image17Cb} {...Image17IoProps}/>
<TextBox className="p-Home TextBox29 bpt" {...TextBox29Props} {...TextBox29Cb} {...TextBox29IoProps}/>
<TextBox className="p-Home TextBox28 bpt" {...TextBox28Props} {...TextBox28Cb} {...TextBox28IoProps}/>
<TextBox className="p-Home TextBox41 bpt" {...TextBox41Props} {...TextBox41Cb} {...TextBox41IoProps}/>
</Div>
</Flex>
</Div>
<Div className="p-Home card4 bpt" {...card4Props} {...card4Cb} {...card4IoProps}>
<Flex className="p-Home Flex25 bpt" {...Flex25Props} {...Flex25Cb} {...Flex25IoProps}>
<Div className="p-Home Div38 bpt" {...Div38Props} {...Div38Cb} {...Div38IoProps}>
<Image className="p-Home Image18 bpt" {...Image18Props} {...Image18Cb} {...Image18IoProps}/>
<TextBox className="p-Home TextBox31 bpt" {...TextBox31Props} {...TextBox31Cb} {...TextBox31IoProps}/>
<TextBox className="p-Home TextBox30 bpt" {...TextBox30Props} {...TextBox30Cb} {...TextBox30IoProps}/>
<TextBox className="p-Home TextBox42 bpt" {...TextBox42Props} {...TextBox42Cb} {...TextBox42IoProps}/>
</Div>
</Flex>
</Div>
</Flex>
<Flex className="p-Home Flex27 bpt" {...Flex27Props} {...Flex27Cb} {...Flex27IoProps}>
<Button className="p-Home Button6 bpt" {...Button6Props} {...Button6Cb} {...Button6IoProps}/>
<Button className="p-Home Button9 bpt" {...Button9Props} {...Button9Cb} {...Button9IoProps}/>
</Flex>
</Flex>
<Div className="p-Home About_Us_Div bpt" {...About_Us_DivProps} {...About_Us_DivCb} {...About_Us_DivIoProps}>
<Div className="p-Home Left_div bpt" {...Left_divProps} {...Left_divCb} {...Left_divIoProps}>
<Div className="p-Home image_div bpt" {...image_divProps} {...image_divCb} {...image_divIoProps}>
<Image className="p-Home Image19 bpt" {...Image19Props} {...Image19Cb} {...Image19IoProps}/>
</Div>
<Div className="p-Home Location_Div bpt" {...Location_DivProps} {...Location_DivCb} {...Location_DivIoProps}>
<Flex className="p-Home Flex30 bpt" {...Flex30Props} {...Flex30Cb} {...Flex30IoProps}>
<TextBox className="p-Home TextBox35 bpt" {...TextBox35Props} {...TextBox35Cb} {...TextBox35IoProps}/>
<Flex className="p-Home Flex31 bpt" {...Flex31Props} {...Flex31Cb} {...Flex31IoProps}>
<Flex className="p-Home Flex32 bpt" {...Flex32Props} {...Flex32Cb} {...Flex32IoProps}>
<Div className="p-Home Icon_div bpt" {...Icon_divProps} {...Icon_divCb} {...Icon_divIoProps}>
<Image className="p-Home Image21 bpt" {...Image21Props} {...Image21Cb} {...Image21IoProps}/>
</Div>
<Div className="p-Home Add_div bpt" {...Add_divProps} {...Add_divCb} {...Add_divIoProps}>
<TextBox className="p-Home Address bpt" {...AddressProps} {...AddressCb} {...AddressIoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex33 bpt" {...Flex33Props} {...Flex33Cb} {...Flex33IoProps}>
<Div className="p-Home Div50 bpt" {...Div50Props} {...Div50Cb} {...Div50IoProps}>
<Image className="p-Home Image22 bpt" {...Image22Props} {...Image22Cb} {...Image22IoProps}/>
</Div>
<Div className="p-Home Div51 bpt" {...Div51Props} {...Div51Cb} {...Div51IoProps}>
<TextBox className="p-Home TextBox37 bpt" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex34 bpt" {...Flex34Props} {...Flex34Cb} {...Flex34IoProps}>
<Div className="p-Home Div52 bpt" {...Div52Props} {...Div52Cb} {...Div52IoProps}>
<Image className="p-Home Image23 bpt" {...Image23Props} {...Image23Cb} {...Image23IoProps}/>
</Div>
<Div className="p-Home Div53 bpt" {...Div53Props} {...Div53Cb} {...Div53IoProps}>
<TextBox className="p-Home TextBox38 bpt" {...TextBox38Props} {...TextBox38Cb} {...TextBox38IoProps}/>
</Div>
</Flex>
</Flex>
</Flex>
</Div>
</Div>
<Div className="p-Home Right_div bpt" {...Right_divProps} {...Right_divCb} {...Right_divIoProps}>
<Flex className="p-Home Flex35 bpt" {...Flex35Props} {...Flex35Cb} {...Flex35IoProps}>
<Div className="p-Home Right_inner_div bpt" {...Right_inner_divProps} {...Right_inner_divCb} {...Right_inner_divIoProps}>
<TextBox className="p-Home About_Us bpt" {...About_UsProps} {...About_UsCb} {...About_UsIoProps}/>
<TextBox className="p-Home Lorem_about bpt" {...Lorem_aboutProps} {...Lorem_aboutCb} {...Lorem_aboutIoProps}/>
</Div>
<Flex className="p-Home Flex36 bpt" {...Flex36Props} {...Flex36Cb} {...Flex36IoProps}>
<Button className="p-Home Button7 bpt" {...Button7Props} {...Button7Cb} {...Button7IoProps}/>
<Button className="p-Home Button8 bpt" {...Button8Props} {...Button8Cb} {...Button8IoProps}/>
</Flex>
</Flex>
</Div>
</Div>
<Flex className="p-Home Flex38 bpt" {...Flex38Props} {...Flex38Cb} {...Flex38IoProps}>
<TextBox className="p-Home Items_Title bpt" {...Items_TitleProps} {...Items_TitleCb} {...Items_TitleIoProps}/>
<TextBox className="p-Home desc bpt" {...descProps} {...descCb} {...descIoProps}/>
<Flex className="p-Home Items_Flex bpt" {...Items_FlexProps} {...Items_FlexCb} {...Items_FlexIoProps}>
<Flex className="p-Home Flex43 bpt" {...Flex43Props} {...Flex43Cb} {...Flex43IoProps}>
<Flex className="p-Home Flex40 bpt" {...Flex40Props} {...Flex40Cb} {...Flex40IoProps}>
<Div className="p-Home Card_div bpt" {...Card_divProps} {...Card_divCb} {...Card_divIoProps}>
<Div className="p-Home card_image_div bpt" {...card_image_divProps} {...card_image_divCb} {...card_image_divIoProps}>
<Div className="p-Home Div62 bpt" {...Div62Props} {...Div62Cb} {...Div62IoProps}>
<TextBox className="p-Home Price bpt" {...PriceProps} {...PriceCb} {...PriceIoProps}/>
</Div>
<Image className="p-Home Image24 bpt" {...Image24Props} {...Image24Cb} {...Image24IoProps}/>
</Div>
<TextBox className="p-Home Item bpt" {...ItemProps} {...ItemCb} {...ItemIoProps}/>
<TextBox className="p-Home TextBox46 bpt" {...TextBox46Props} {...TextBox46Cb} {...TextBox46IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex56 bpt" {...Flex56Props} {...Flex56Cb} {...Flex56IoProps}>
<Div className="p-Home Div107 bpt" {...Div107Props} {...Div107Cb} {...Div107IoProps}>
<Div className="p-Home Div106 bpt" {...Div106Props} {...Div106Cb} {...Div106IoProps}>
<Div className="p-Home Div105 bpt" {...Div105Props} {...Div105Cb} {...Div105IoProps}>
<TextBox className="p-Home TextBox90 bpt" {...TextBox90Props} {...TextBox90Cb} {...TextBox90IoProps}/>
</Div>
<Image className="p-Home Image39 bpt" {...Image39Props} {...Image39Cb} {...Image39IoProps}/>
</Div>
<TextBox className="p-Home TextBox91 bpt" {...TextBox91Props} {...TextBox91Cb} {...TextBox91IoProps}/>
<TextBox className="p-Home TextBox92 bpt" {...TextBox92Props} {...TextBox92Cb} {...TextBox92IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex57 bpt" {...Flex57Props} {...Flex57Cb} {...Flex57IoProps}>
<Div className="p-Home Div110 bpt" {...Div110Props} {...Div110Cb} {...Div110IoProps}>
<Div className="p-Home Div109 bpt" {...Div109Props} {...Div109Cb} {...Div109IoProps}>
<Div className="p-Home Div108 bpt" {...Div108Props} {...Div108Cb} {...Div108IoProps}>
<TextBox className="p-Home TextBox93 bpt" {...TextBox93Props} {...TextBox93Cb} {...TextBox93IoProps}/>
</Div>
<Image className="p-Home Image40 bpt" {...Image40Props} {...Image40Cb} {...Image40IoProps}/>
</Div>
<TextBox className="p-Home TextBox94 bpt" {...TextBox94Props} {...TextBox94Cb} {...TextBox94IoProps}/>
<TextBox className="p-Home TextBox95 bpt" {...TextBox95Props} {...TextBox95Cb} {...TextBox95IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex58 bpt" {...Flex58Props} {...Flex58Cb} {...Flex58IoProps}>
<Div className="p-Home Div113 bpt" {...Div113Props} {...Div113Cb} {...Div113IoProps}>
<Div className="p-Home Div112 bpt" {...Div112Props} {...Div112Cb} {...Div112IoProps}>
<Div className="p-Home Div111 bpt" {...Div111Props} {...Div111Cb} {...Div111IoProps}>
<TextBox className="p-Home TextBox96 bpt" {...TextBox96Props} {...TextBox96Cb} {...TextBox96IoProps}/>
</Div>
<Image className="p-Home Image41 bpt" {...Image41Props} {...Image41Cb} {...Image41IoProps}/>
</Div>
<TextBox className="p-Home TextBox97 bpt" {...TextBox97Props} {...TextBox97Cb} {...TextBox97IoProps}/>
<TextBox className="p-Home TextBox98 bpt" {...TextBox98Props} {...TextBox98Cb} {...TextBox98IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex59 bpt" {...Flex59Props} {...Flex59Cb} {...Flex59IoProps}>
<Div className="p-Home Div116 bpt" {...Div116Props} {...Div116Cb} {...Div116IoProps}>
<Div className="p-Home Div115 bpt" {...Div115Props} {...Div115Cb} {...Div115IoProps}>
<Div className="p-Home Div114 bpt" {...Div114Props} {...Div114Cb} {...Div114IoProps}>
<TextBox className="p-Home TextBox99 bpt" {...TextBox99Props} {...TextBox99Cb} {...TextBox99IoProps}/>
</Div>
<Image className="p-Home Image42 bpt" {...Image42Props} {...Image42Cb} {...Image42IoProps}/>
</Div>
<TextBox className="p-Home TextBox100 bpt" {...TextBox100Props} {...TextBox100Cb} {...TextBox100IoProps}/>
<TextBox className="p-Home TextBox101 bpt" {...TextBox101Props} {...TextBox101Cb} {...TextBox101IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex60 bpt" {...Flex60Props} {...Flex60Cb} {...Flex60IoProps}>
<Div className="p-Home Div119 bpt" {...Div119Props} {...Div119Cb} {...Div119IoProps}>
<Div className="p-Home Div118 bpt" {...Div118Props} {...Div118Cb} {...Div118IoProps}>
<Div className="p-Home Div117 bpt" {...Div117Props} {...Div117Cb} {...Div117IoProps}>
<TextBox className="p-Home TextBox102 bpt" {...TextBox102Props} {...TextBox102Cb} {...TextBox102IoProps}/>
</Div>
<Image className="p-Home Image43 bpt" {...Image43Props} {...Image43Cb} {...Image43IoProps}/>
</Div>
<TextBox className="p-Home TextBox103 bpt" {...TextBox103Props} {...TextBox103Cb} {...TextBox103IoProps}/>
<TextBox className="p-Home TextBox104 bpt" {...TextBox104Props} {...TextBox104Cb} {...TextBox104IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex61 bpt" {...Flex61Props} {...Flex61Cb} {...Flex61IoProps}>
<Div className="p-Home Div122 bpt" {...Div122Props} {...Div122Cb} {...Div122IoProps}>
<Div className="p-Home Div121 bpt" {...Div121Props} {...Div121Cb} {...Div121IoProps}>
<Div className="p-Home Div120 bpt" {...Div120Props} {...Div120Cb} {...Div120IoProps}>
<TextBox className="p-Home TextBox105 bpt" {...TextBox105Props} {...TextBox105Cb} {...TextBox105IoProps}/>
</Div>
<Image className="p-Home Image44 bpt" {...Image44Props} {...Image44Cb} {...Image44IoProps}/>
</Div>
<TextBox className="p-Home TextBox106 bpt" {...TextBox106Props} {...TextBox106Cb} {...TextBox106IoProps}/>
<TextBox className="p-Home TextBox107 bpt" {...TextBox107Props} {...TextBox107Cb} {...TextBox107IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex62 bpt" {...Flex62Props} {...Flex62Cb} {...Flex62IoProps}>
<Div className="p-Home Div125 bpt" {...Div125Props} {...Div125Cb} {...Div125IoProps}>
<Div className="p-Home Div124 bpt" {...Div124Props} {...Div124Cb} {...Div124IoProps}>
<Div className="p-Home Div123 bpt" {...Div123Props} {...Div123Cb} {...Div123IoProps}>
<TextBox className="p-Home TextBox108 bpt" {...TextBox108Props} {...TextBox108Cb} {...TextBox108IoProps}/>
</Div>
<Image className="p-Home Image45 bpt" {...Image45Props} {...Image45Cb} {...Image45IoProps}/>
</Div>
<TextBox className="p-Home TextBox109 bpt" {...TextBox109Props} {...TextBox109Cb} {...TextBox109IoProps}/>
<TextBox className="p-Home TextBox110 bpt" {...TextBox110Props} {...TextBox110Cb} {...TextBox110IoProps}/>
</Div>
</Flex>
</Flex>
</Flex>
<Div className="p-Home Div127 bpt" {...Div127Props} {...Div127Cb} {...Div127IoProps}>
<Flex className="p-Home Flex63 bpt" {...Flex63Props} {...Flex63Cb} {...Flex63IoProps}>
<Button className="p-Home Button10 bpt" {...Button10Props} {...Button10Cb} {...Button10IoProps}/>
<Button className="p-Home Button11 bpt" {...Button11Props} {...Button11Cb} {...Button11IoProps}/>
</Flex>
</Div>
</Flex>
<Div className="p-Home Div128 bpt" {...Div128Props} {...Div128Cb} {...Div128IoProps}>
<Flex className="p-Home Flex64 bpt" {...Flex64Props} {...Flex64Cb} {...Flex64IoProps}>
<Flex className="p-Home Flex65 bpt" {...Flex65Props} {...Flex65Cb} {...Flex65IoProps}>
<TextBox className="p-Home TextBox111 bpt" {...TextBox111Props} {...TextBox111Cb} {...TextBox111IoProps}/>
<TextBox className="p-Home TextBox112 bpt" {...TextBox112Props} {...TextBox112Cb} {...TextBox112IoProps}/>
<Div className="p-Home Div133 bpt" {...Div133Props} {...Div133Cb} {...Div133IoProps}>
<Flex className="p-Home Flex66 bpt" {...Flex66Props} {...Flex66Cb} {...Flex66IoProps}>
<Button className="p-Home Button13 bpt" {...Button13Props} {...Button13Cb} {...Button13IoProps}/>
<Button className="p-Home Button12 bpt" {...Button12Props} {...Button12Cb} {...Button12IoProps}/>
</Flex>
</Div>
</Flex>
<Div className="p-Home Div132 bpt" {...Div132Props} {...Div132Cb} {...Div132IoProps}>
<Image className="p-Home Image47 bpt" {...Image47Props} {...Image47Cb} {...Image47IoProps}/>
</Div>
</Flex>
</Div>
<Div className="p-Home Div179 bpt" {...Div179Props} {...Div179Cb} {...Div179IoProps}>
<Flex className="p-Home Flex90 bpt" {...Flex90Props} {...Flex90Cb} {...Flex90IoProps}>
<Div className="p-Home Div177 bpt" {...Div177Props} {...Div177Cb} {...Div177IoProps}/>
<Div className="p-Home Div160 bpt" {...Div160Props} {...Div160Cb} {...Div160IoProps}>
<Flex className="p-Home Flex81 bpt" {...Flex81Props} {...Flex81Cb} {...Flex81IoProps}>
<Div className="p-Home Div161 bpt" {...Div161Props} {...Div161Cb} {...Div161IoProps}>
<TextBox className="p-Home TextBox127 bpt" {...TextBox127Props} {...TextBox127Cb} {...TextBox127IoProps}/>
</Div>
<Div className="p-Home Div162 bpt" {...Div162Props} {...Div162Cb} {...Div162IoProps}>
<TextBox className="p-Home TextBox128 bpt" {...TextBox128Props} {...TextBox128Cb} {...TextBox128IoProps}/>
</Div>
<Div className="p-Home Div163 bpt" {...Div163Props} {...Div163Cb} {...Div163IoProps}>
<Flex className="p-Home Flex82 bpt" {...Flex82Props} {...Flex82Cb} {...Flex82IoProps}>
<Div className="p-Home Div166 bpt" {...Div166Props} {...Div166Cb} {...Div166IoProps}>
<Image className="p-Home Image53 bpt" {...Image53Props} {...Image53Cb} {...Image53IoProps}/>
</Div>
<Div className="p-Home Div167 bpt" {...Div167Props} {...Div167Cb} {...Div167IoProps}>
<Flex className="p-Home Flex86 bpt" {...Flex86Props} {...Flex86Cb} {...Flex86IoProps}>
<Div className="p-Home Div173 bpt" {...Div173Props} {...Div173Cb} {...Div173IoProps}>
<Flex className="p-Home Flex87 bpt" {...Flex87Props} {...Flex87Cb} {...Flex87IoProps}>
<Image className="p-Home Image56 bpt" {...Image56Props} {...Image56Cb} {...Image56IoProps}/>
<Image className="p-Home Image57 bpt" {...Image57Props} {...Image57Cb} {...Image57IoProps}/>
<Image className="p-Home Image58 bpt" {...Image58Props} {...Image58Cb} {...Image58IoProps}/>
<Image className="p-Home Image59 bpt" {...Image59Props} {...Image59Cb} {...Image59IoProps}/>
<Image className="p-Home Image60 bpt" {...Image60Props} {...Image60Cb} {...Image60IoProps}/>
</Flex>
</Div>
<TextBox className="p-Home TextBox129 bpt" {...TextBox129Props} {...TextBox129Cb} {...TextBox129IoProps}/>
<TextBox className="p-Home TextBox130 bpt" {...TextBox130Props} {...TextBox130Cb} {...TextBox130IoProps}/>
<Div className="p-Home Div174 bpt" {...Div174Props} {...Div174Cb} {...Div174IoProps}>
<Flex className="p-Home Flex88 bpt" {...Flex88Props} {...Flex88Cb} {...Flex88IoProps}>
<Div className="p-Home Div175 bpt" {...Div175Props} {...Div175Cb} {...Div175IoProps}>
<Image className="p-Home Image61 bpt" {...Image61Props} {...Image61Cb} {...Image61IoProps}/>
</Div>
<Div className="p-Home Div176 bpt" {...Div176Props} {...Div176Cb} {...Div176IoProps}>
<Flex className="p-Home Flex89 bpt" {...Flex89Props} {...Flex89Cb} {...Flex89IoProps}>
<TextBox className="p-Home TextBox131 bpt" {...TextBox131Props} {...TextBox131Cb} {...TextBox131IoProps}/>
</Flex>
<TextBox className="p-Home TextBox132 bpt" {...TextBox132Props} {...TextBox132Cb} {...TextBox132IoProps}/>
</Div>
</Flex>
</Div>
</Flex>
</Div>
<Div className="p-Home Div168 bpt" {...Div168Props} {...Div168Cb} {...Div168IoProps}>
<Image className="p-Home Image54 bpt" {...Image54Props} {...Image54Cb} {...Image54IoProps}/>
</Div>
</Flex>
</Div>
<Div className="p-Home Div164 bpt" {...Div164Props} {...Div164Cb} {...Div164IoProps}>
<Flex className="p-Home Flex85 bpt" {...Flex85Props} {...Flex85Cb} {...Flex85IoProps}>
<Button className="p-Home Button25 bpt" {...Button25Props} {...Button25Cb} {...Button25IoProps}/>
<Button className="p-Home Button24 bpt" {...Button24Props} {...Button24Cb} {...Button24IoProps}/>
</Flex>
</Div>
</Flex>
</Div>
<Div className="p-Home Div178 bpt" {...Div178Props} {...Div178Cb} {...Div178IoProps}/>
</Flex>
</Div>
<Div className="p-Home Div180 bpt" {...Div180Props} {...Div180Cb} {...Div180IoProps}>
<Flex className="p-Home Flex91 bpt" {...Flex91Props} {...Flex91Cb} {...Flex91IoProps}>
<Div className="p-Home Div181 bpt" {...Div181Props} {...Div181Cb} {...Div181IoProps}>
<Flex className="p-Home Flex92 bpt" {...Flex92Props} {...Flex92Cb} {...Flex92IoProps}>
<Div className="p-Home Div182 bpt" {...Div182Props} {...Div182Cb} {...Div182IoProps}>
<TextBox className="p-Home TextBox133 bpt" {...TextBox133Props} {...TextBox133Cb} {...TextBox133IoProps}/>
</Div>
<Div className="p-Home Div183 bpt" {...Div183Props} {...Div183Cb} {...Div183IoProps}>
<Button className="p-Home Button26 bpt" {...Button26Props} {...Button26Cb} {...Button26IoProps}/>
</Div>
</Flex>
</Div>
</Flex>
<Div className="p-Home Div184 bpt" {...Div184Props} {...Div184Cb} {...Div184IoProps}>
<Flex className="p-Home Flex93 bpt" {...Flex93Props} {...Flex93Cb} {...Flex93IoProps}>
<Div className="p-Home Div185 bpt" {...Div185Props} {...Div185Cb} {...Div185IoProps}>
<Flex className="p-Home Flex94 bpt" {...Flex94Props} {...Flex94Cb} {...Flex94IoProps}>
<Image className="p-Home Image62 bpt" {...Image62Props} {...Image62Cb} {...Image62IoProps}/>
</Flex>
<TextBox className="p-Home TextBox134 bpt" {...TextBox134Props} {...TextBox134Cb} {...TextBox134IoProps}/>
<TextBox className="p-Home TextBox135 bpt" {...TextBox135Props} {...TextBox135Cb} {...TextBox135IoProps}/>
<TextBox className="p-Home TextBox136 bpt" {...TextBox136Props} {...TextBox136Cb} {...TextBox136IoProps}/>
</Div>
<Div className="p-Home Div186 bpt" {...Div186Props} {...Div186Cb} {...Div186IoProps}>
<Flex className="p-Home Flex95 bpt" {...Flex95Props} {...Flex95Cb} {...Flex95IoProps}>
<Div className="p-Home Div187 bpt" {...Div187Props} {...Div187Cb} {...Div187IoProps}>
<Flex className="p-Home Flex96 bpt" {...Flex96Props} {...Flex96Cb} {...Flex96IoProps}>
<Image className="p-Home Image63 bpt" {...Image63Props} {...Image63Cb} {...Image63IoProps}/>
</Flex>
<TextBox className="p-Home TextBox139 bpt" {...TextBox139Props} {...TextBox139Cb} {...TextBox139IoProps}/>
<TextBox className="p-Home TextBox138 bpt" {...TextBox138Props} {...TextBox138Cb} {...TextBox138IoProps}/>
</Div>
<Div className="p-Home Div203 bpt" {...Div203Props} {...Div203Cb} {...Div203IoProps}>
<Flex className="p-Home Flex112 bpt" {...Flex112Props} {...Flex112Cb} {...Flex112IoProps}>
<Image className="p-Home Image79 bpt" {...Image79Props} {...Image79Cb} {...Image79IoProps}/>
</Flex>
<TextBox className="p-Home TextBox170 bpt" {...TextBox170Props} {...TextBox170Cb} {...TextBox170IoProps}/>
<TextBox className="p-Home TextBox171 bpt" {...TextBox171Props} {...TextBox171Cb} {...TextBox171IoProps}/>
</Div>
<Div className="p-Home Div204 bpt" {...Div204Props} {...Div204Cb} {...Div204IoProps}>
<Flex className="p-Home Flex113 bpt" {...Flex113Props} {...Flex113Cb} {...Flex113IoProps}>
<Image className="p-Home Image80 bpt" {...Image80Props} {...Image80Cb} {...Image80IoProps}/>
</Flex>
<TextBox className="p-Home TextBox172 bpt" {...TextBox172Props} {...TextBox172Cb} {...TextBox172IoProps}/>
<TextBox className="p-Home TextBox173 bpt" {...TextBox173Props} {...TextBox173Cb} {...TextBox173IoProps}/>
</Div>
<Div className="p-Home Div205 bpt" {...Div205Props} {...Div205Cb} {...Div205IoProps}>
<Flex className="p-Home Flex114 bpt" {...Flex114Props} {...Flex114Cb} {...Flex114IoProps}>
<Image className="p-Home Image81 bpt" {...Image81Props} {...Image81Cb} {...Image81IoProps}/>
</Flex>
<TextBox className="p-Home TextBox174 bpt" {...TextBox174Props} {...TextBox174Cb} {...TextBox174IoProps}/>
<TextBox className="p-Home TextBox175 bpt" {...TextBox175Props} {...TextBox175Cb} {...TextBox175IoProps}/>
</Div>
</Flex>
</Div>
</Flex>
</Div>
</Div>
<Div className="p-Home Div206 bpt" {...Div206Props} {...Div206Cb} {...Div206IoProps}>
<Flex className="p-Home Flex115 bpt" {...Flex115Props} {...Flex115Cb} {...Flex115IoProps}>
<Div className="p-Home Div207 bpt" {...Div207Props} {...Div207Cb} {...Div207IoProps}>
<Flex className="p-Home Flex116 bpt" {...Flex116Props} {...Flex116Cb} {...Flex116IoProps}>
<Div className="p-Home Div211 bpt" {...Div211Props} {...Div211Cb} {...Div211IoProps}>
<TextBox className="p-Home TextBox179 bpt" {...TextBox179Props} {...TextBox179Cb} {...TextBox179IoProps}/>
</Div>
<Div className="p-Home Div210 bpt" {...Div210Props} {...Div210Cb} {...Div210IoProps}>
<TextBox className="p-Home TextBox180 bpt" {...TextBox180Props} {...TextBox180Cb} {...TextBox180IoProps}/>
</Div>
<Div className="p-Home Div209 bpt" {...Div209Props} {...Div209Cb} {...Div209IoProps}>
<Flex className="p-Home Flex120 bpt" {...Flex120Props} {...Flex120Cb} {...Flex120IoProps}>
<Flex className="p-Home Flex119 bpt" {...Flex119Props} {...Flex119Cb} {...Flex119IoProps}>
<Div className="p-Home Div216 bpt" {...Div216Props} {...Div216Cb} {...Div216IoProps}>
<Image className="p-Home Image84 bpt" {...Image84Props} {...Image84Cb} {...Image84IoProps}/>
</Div>
<Div className="p-Home Div217 bpt" {...Div217Props} {...Div217Cb} {...Div217IoProps}>
<TextBox className="p-Home TextBox178 bpt" {...TextBox178Props} {...TextBox178Cb} {...TextBox178IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex118 bpt" {...Flex118Props} {...Flex118Cb} {...Flex118IoProps}>
<Div className="p-Home Div215 bpt" {...Div215Props} {...Div215Cb} {...Div215IoProps}>
<Image className="p-Home Image83 bpt" {...Image83Props} {...Image83Cb} {...Image83IoProps}/>
</Div>
<Div className="p-Home Div214 bpt" {...Div214Props} {...Div214Cb} {...Div214IoProps}>
<TextBox className="p-Home TextBox177 bpt" {...TextBox177Props} {...TextBox177Cb} {...TextBox177IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex117 bpt" {...Flex117Props} {...Flex117Cb} {...Flex117IoProps}>
<Div className="p-Home Div213 bpt" {...Div213Props} {...Div213Cb} {...Div213IoProps}>
<Image className="p-Home Image82 bpt" {...Image82Props} {...Image82Cb} {...Image82IoProps}/>
</Div>
<Div className="p-Home Div212 bpt" {...Div212Props} {...Div212Cb} {...Div212IoProps}>
<TextBox className="p-Home TextBox176 bpt" {...TextBox176Props} {...TextBox176Cb} {...TextBox176IoProps}/>
</Div>
</Flex>
</Flex>
</Div>
</Flex>
</Div>
<Div className="p-Home Div208 bpt" {...Div208Props} {...Div208Cb} {...Div208IoProps}>
<Div className="p-Home Div218 bpt" {...Div218Props} {...Div218Cb} {...Div218IoProps}>
<Div className="p-Home Div219 bpt" {...Div219Props} {...Div219Cb} {...Div219IoProps}>
<Flex className="p-Home Flex121 bpt" {...Flex121Props} {...Flex121Cb} {...Flex121IoProps}>
<Div className="p-Home Div220 bpt" {...Div220Props} {...Div220Cb} {...Div220IoProps}>
<Flex className="p-Home Flex122 bpt" {...Flex122Props} {...Flex122Cb} {...Flex122IoProps}>
<TextBox className="p-Home TextBox181 bpt" {...TextBox181Props} {...TextBox181Cb} {...TextBox181IoProps}/>
<Input className="p-Home Input1 bpt" {...Input1Props} {...Input1Cb} {...Input1IoProps}/>
</Flex>
</Div>
<Div className="p-Home Div226 bpt" {...Div226Props} {...Div226Cb} {...Div226IoProps}>
<Flex className="p-Home Flex128 bpt" {...Flex128Props} {...Flex128Cb} {...Flex128IoProps}>
<TextBox className="p-Home TextBox187 bpt" {...TextBox187Props} {...TextBox187Cb} {...TextBox187IoProps}/>
<Input className="p-Home Input7 bpt" {...Input7Props} {...Input7Cb} {...Input7IoProps}/>
</Flex>
</Div>
<Div className="p-Home Div227 bpt" {...Div227Props} {...Div227Cb} {...Div227IoProps}>
<Flex className="p-Home Flex129 bpt" {...Flex129Props} {...Flex129Cb} {...Flex129IoProps}>
<TextBox className="p-Home TextBox188 bpt" {...TextBox188Props} {...TextBox188Cb} {...TextBox188IoProps}/>
<Input className="p-Home Input8 bpt" {...Input8Props} {...Input8Cb} {...Input8IoProps}/>
</Flex>
</Div>
<Div className="p-Home Div228 bpt" {...Div228Props} {...Div228Cb} {...Div228IoProps}>
<Flex className="p-Home Flex130 bpt" {...Flex130Props} {...Flex130Cb} {...Flex130IoProps}>
<TextBox className="p-Home TextBox189 bpt" {...TextBox189Props} {...TextBox189Cb} {...TextBox189IoProps}/>
<Input className="p-Home Input9 bpt" {...Input9Props} {...Input9Cb} {...Input9IoProps}/>
</Flex>
</Div>
<Div className="p-Home Div229 bpt" {...Div229Props} {...Div229Cb} {...Div229IoProps}>
<Flex className="p-Home Flex131 bpt" {...Flex131Props} {...Flex131Cb} {...Flex131IoProps}>
<TextBox className="p-Home TextBox190 bpt" {...TextBox190Props} {...TextBox190Cb} {...TextBox190IoProps}/>
<Input className="p-Home Input10 bpt" {...Input10Props} {...Input10Cb} {...Input10IoProps}/>
</Flex>
</Div>
<Div className="p-Home Div230 bpt" {...Div230Props} {...Div230Cb} {...Div230IoProps}>
<Flex className="p-Home Flex132 bpt" {...Flex132Props} {...Flex132Cb} {...Flex132IoProps}>
<TextBox className="p-Home TextBox191 bpt" {...TextBox191Props} {...TextBox191Cb} {...TextBox191IoProps}/>
<Input className="p-Home Input11 bpt" {...Input11Props} {...Input11Cb} {...Input11IoProps}/>
</Flex>
</Div>
</Flex>
</Div>
<Div className="p-Home Div231 bpt" {...Div231Props} {...Div231Cb} {...Div231IoProps}>
<Flex className="p-Home Flex133 bpt" {...Flex133Props} {...Flex133Cb} {...Flex133IoProps}>
<TextBox className="p-Home TextBox192 bpt" {...TextBox192Props} {...TextBox192Cb} {...TextBox192IoProps}/>
<Input className="p-Home Input12 bpt" {...Input12Props} {...Input12Cb} {...Input12IoProps}/>
</Flex>
</Div>
<Button className="p-Home Button27 bpt" {...Button27Props} {...Button27Cb} {...Button27IoProps}/>
</Div>
</Div>
</Flex>
</Div>
<Div className="p-Home Div232 bpt" {...Div232Props} {...Div232Cb} {...Div232IoProps}>
<Flex className="p-Home Flex135 bpt" {...Flex135Props} {...Flex135Cb} {...Flex135IoProps}>
<Div className="p-Home Div235 bpt" {...Div235Props} {...Div235Cb} {...Div235IoProps}>
<Flex className="p-Home Flex134 bpt" {...Flex134Props} {...Flex134Cb} {...Flex134IoProps}>
<Div className="p-Home Div234 bpt" {...Div234Props} {...Div234Cb} {...Div234IoProps}>
<TextBox className="p-Home TextBox193 bpt" {...TextBox193Props} {...TextBox193Cb} {...TextBox193IoProps}/>
</Div>
<Div className="p-Home Div233 bpt" {...Div233Props} {...Div233Cb} {...Div233IoProps}>
<Button className="p-Home Button28 bpt" {...Button28Props} {...Button28Cb} {...Button28IoProps}/>
</Div>
</Flex>
</Div>
</Flex>
<Div className="p-Home Div236 bpt" {...Div236Props} {...Div236Cb} {...Div236IoProps}>
<Flex className="p-Home Flex136 bpt" {...Flex136Props} {...Flex136Cb} {...Flex136IoProps}>
<Div className="p-Home Div237 bpt" {...Div237Props} {...Div237Cb} {...Div237IoProps}>
<Image className="p-Home Image85 bpt" {...Image85Props} {...Image85Cb} {...Image85IoProps}/>
</Div>
<Div className="p-Home Div238 bpt" {...Div238Props} {...Div238Cb} {...Div238IoProps}>
<Image className="p-Home Image86 bpt" {...Image86Props} {...Image86Cb} {...Image86IoProps}/>
</Div>
<Div className="p-Home Div239 bpt" {...Div239Props} {...Div239Cb} {...Div239IoProps}>
<Flex className="p-Home Flex137 bpt" {...Flex137Props} {...Flex137Cb} {...Flex137IoProps}>
<Div className="p-Home Div240 bpt" {...Div240Props} {...Div240Cb} {...Div240IoProps}>
<Image className="p-Home Image87 bpt" {...Image87Props} {...Image87Cb} {...Image87IoProps}/>
</Div>
<Div className="p-Home Div241 bpt" {...Div241Props} {...Div241Cb} {...Div241IoProps}>
<Image className="p-Home Image88 bpt" {...Image88Props} {...Image88Cb} {...Image88IoProps}/>
</Div>
<Div className="p-Home Div242 bpt" {...Div242Props} {...Div242Cb} {...Div242IoProps}>
<Image className="p-Home Image89 bpt" {...Image89Props} {...Image89Cb} {...Image89IoProps}/>
</Div>
<Div className="p-Home Div243 bpt" {...Div243Props} {...Div243Cb} {...Div243IoProps}>
<Image className="p-Home Image90 bpt" {...Image90Props} {...Image90Cb} {...Image90IoProps}/>
</Div>
</Flex>
</Div>
</Flex>
</Div>
</Div>
<Div className="p-Home Div244 bpt" {...Div244Props} {...Div244Cb} {...Div244IoProps}>
<Flex className="p-Home Flex138 bpt" {...Flex138Props} {...Flex138Cb} {...Flex138IoProps}>
<Div className="p-Home Div245 bpt" {...Div245Props} {...Div245Cb} {...Div245IoProps}>
<Flex className="p-Home Flex140 bpt" {...Flex140Props} {...Flex140Cb} {...Flex140IoProps}>
<Image className="p-Home Image95 bpt" {...Image95Props} {...Image95Cb} {...Image95IoProps}/>
<TextBox className="p-Home TextBox195 bpt" {...TextBox195Props} {...TextBox195Cb} {...TextBox195IoProps}/>
<Flex className="p-Home Flex141 bpt" {...Flex141Props} {...Flex141Cb} {...Flex141IoProps}>
<Image className="p-Home Image100 bpt" {...Image100Props} {...Image100Cb} {...Image100IoProps}/>
<Image className="p-Home Image99 bpt" {...Image99Props} {...Image99Cb} {...Image99IoProps}/>
<Image className="p-Home Image98 bpt" {...Image98Props} {...Image98Cb} {...Image98IoProps}/>
<Image className="p-Home Image97 bpt" {...Image97Props} {...Image97Cb} {...Image97IoProps}/>
<Image className="p-Home Image96 bpt" {...Image96Props} {...Image96Cb} {...Image96IoProps}/>
</Flex>
</Flex>
</Div>
<Div className="p-Home Div246 bpt" {...Div246Props} {...Div246Cb} {...Div246IoProps}>
<Flex className="p-Home Flex142 bpt" {...Flex142Props} {...Flex142Cb} {...Flex142IoProps}>
<Div className="p-Home Div252 bpt" {...Div252Props} {...Div252Cb} {...Div252IoProps}>
<Flex className="p-Home Flex143 bpt" {...Flex143Props} {...Flex143Cb} {...Flex143IoProps}>
<TextBox className="p-Home TextBox196 bpt" {...TextBox196Props} {...TextBox196Cb} {...TextBox196IoProps}/>
<TextBox className="p-Home TextBox197 bpt" {...TextBox197Props} {...TextBox197Cb} {...TextBox197IoProps}/>
<TextBox className="p-Home TextBox198 bpt" {...TextBox198Props} {...TextBox198Cb} {...TextBox198IoProps}/>
<TextBox className="p-Home TextBox199 bpt" {...TextBox199Props} {...TextBox199Cb} {...TextBox199IoProps}/>
<TextBox className="p-Home TextBox200 bpt" {...TextBox200Props} {...TextBox200Cb} {...TextBox200IoProps}/>
<TextBox className="p-Home TextBox201 bpt" {...TextBox201Props} {...TextBox201Cb} {...TextBox201IoProps}/>
<TextBox className="p-Home TextBox202 bpt" {...TextBox202Props} {...TextBox202Cb} {...TextBox202IoProps}/>
<TextBox className="p-Home TextBox203 bpt" {...TextBox203Props} {...TextBox203Cb} {...TextBox203IoProps}/>
</Flex>
</Div>
<Div className="p-Home Div253 bpt" {...Div253Props} {...Div253Cb} {...Div253IoProps}>
<Flex className="p-Home Flex146 bpt" {...Flex146Props} {...Flex146Cb} {...Flex146IoProps}>
<TextBox className="p-Home TextBox219 bpt" {...TextBox219Props} {...TextBox219Cb} {...TextBox219IoProps}/>
<TextBox className="p-Home TextBox218 bpt" {...TextBox218Props} {...TextBox218Cb} {...TextBox218IoProps}/>
<TextBox className="p-Home TextBox217 bpt" {...TextBox217Props} {...TextBox217Cb} {...TextBox217IoProps}/>
<TextBox className="p-Home TextBox216 bpt" {...TextBox216Props} {...TextBox216Cb} {...TextBox216IoProps}/>
<TextBox className="p-Home TextBox215 bpt" {...TextBox215Props} {...TextBox215Cb} {...TextBox215IoProps}/>
<TextBox className="p-Home TextBox214 bpt" {...TextBox214Props} {...TextBox214Cb} {...TextBox214IoProps}/>
<TextBox className="p-Home TextBox213 bpt" {...TextBox213Props} {...TextBox213Cb} {...TextBox213IoProps}/>
<TextBox className="p-Home TextBox212 bpt" {...TextBox212Props} {...TextBox212Cb} {...TextBox212IoProps}/>
</Flex>
</Div>
</Flex>
</Div>
<Div className="p-Home Div247 bpt" {...Div247Props} {...Div247Cb} {...Div247IoProps}>
<TextBox className="p-Home TextBox194 bpt" {...TextBox194Props} {...TextBox194Cb} {...TextBox194IoProps}/>
<Flex className="p-Home Flex139 bpt" {...Flex139Props} {...Flex139Cb} {...Flex139IoProps}>
<Div className="p-Home Div251 bpt" {...Div251Props} {...Div251Cb} {...Div251IoProps}>
<Image className="p-Home Image94 bpt" {...Image94Props} {...Image94Cb} {...Image94IoProps}/>
</Div>
<Div className="p-Home Div250 bpt" {...Div250Props} {...Div250Cb} {...Div250IoProps}>
<Image className="p-Home Image93 bpt" {...Image93Props} {...Image93Cb} {...Image93IoProps}/>
</Div>
<Div className="p-Home Div249 bpt" {...Div249Props} {...Div249Cb} {...Div249IoProps}>
<Image className="p-Home Image92 bpt" {...Image92Props} {...Image92Cb} {...Image92IoProps}/>
</Div>
<Div className="p-Home Div248 bpt" {...Div248Props} {...Div248Cb} {...Div248IoProps}>
<Image className="p-Home Image91 bpt" {...Image91Props} {...Image91Cb} {...Image91IoProps}/>
</Div>
</Flex>
</Div>
</Flex>
</Div>
</Div>
  </>);
}
