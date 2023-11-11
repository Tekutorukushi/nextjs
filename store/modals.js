import { observable } from '@legendapp/state';
import { persistObservable } from '@legendapp/state/persist';
import { ObservablePersistLocalStorage } from '@legendapp/state/persist-plugins/local-storage';

export const ModalState = observable({
    modal: { state: false },
});

persistObservable(ModalState, { persistLocal: ObservablePersistLocalStorage });
