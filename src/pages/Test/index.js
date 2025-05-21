import RoutePath from "../../components/route-path";
import HighlightedText from "../../components/highlighted-text";
import HighlightedGreenText from "../../components/highlighted-green-text";
import HighlightedBlueText from "../../components/highlighted-blue-text";
import HighlightedOrangeText from "../../components/highlighted-orange-text";
import HighlightedGreyText from "../../components/highlighted-grey-text";
import HighlightedBlackText from "../../components/highlighted-black-text";
import FavoriteButtonNoText from "../../components/favorite-button-no-text";
import BrownText from "../../components/brown-text";
import ToggleCollapseButton from "../../components/toggle-collapse-button";
import {Database } from 'lucide-react';
import SearchInput from "../../components/search-input";
import CircleToggleButton from "../../components/circle-toggle-button";
import UserAvatar from "../../components/user-avatar";
import TransportCard from "../../blocks/transport-card";
import IconToggleButton from "../../components/icon-toggle-button";
import { Bookmark } from 'lucide-react';
import ButtonShaded from "../../components/button-shaded";

const Test = () => {

  return (
    <div>
 <TransportCard ifuser={true}/>
 <TransportCard ifuser={false}/>
 


    </div>
    
  );
};

export default Test;
