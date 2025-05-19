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


const Test = () => {

  return (
    <div>
   <RoutePath places={['Ташкент', 'Самарканд', 'Бухара']} />
   <HighlightedText children='Кол-во палет: 33'/>
   <HighlightedGreenText   icon={Database} children='200 000 грн'/>
   <HighlightedGreenText   children='Наличные'/>
   <HighlightedBlueText   children='999 км'/>
   <HighlightedOrangeText children='Кол-во повторов: 2'/>
   <BrownText children='Кол-во повторов: 2'/>
   <HighlightedGreyText children='Кол-во повторов: 2'/>
   <HighlightedBlackText children='Кол-во повторов: 2'/>
   <FavoriteButtonNoText/>
   <ToggleCollapseButton label="Подробнее" width="140px" />
   <SearchInput onSearch={(query) => console.log('Искать:', query)} />
   <CircleToggleButton />
   <UserAvatar name="Иван Иванович" />

    </div>
    
  );
};

export default Test;
