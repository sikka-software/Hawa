import { EventStoreType } from './EventStore';
import { ScrollBodyType } from './ScrollBody';
import { ScrollToType } from './ScrollTo';
import { SlideRegistryType } from './SlideRegistry';
export type SlideFocusType = {
    init: () => void;
};
export declare function SlideFocus(root: HTMLElement, slides: HTMLElement[], slideRegistry: SlideRegistryType['slideRegistry'], scrollTo: ScrollToType, scrollBody: ScrollBodyType, eventStore: EventStoreType): SlideFocusType;
