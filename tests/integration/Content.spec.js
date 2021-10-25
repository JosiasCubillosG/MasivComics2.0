import { render, fireEvent, waitFor, cleanup } from '@testing-library/vue';
import Home from '@/views/Home.vue';
import '@testing-library/jest-dom';
import { name as comicName, module as comicModule } from '@/store/modules/comics';

const renderView = () => {
    const store = {
        modules: {
            [comicName]: comicModule,
        },
    }
    return render(
        Home,
        {
            store
        }
    )
};

describe('Home view', () => {
    beforeEach(() => cleanup());

    test('Home Tests', () => {
        const { getByTestId } = renderView();
        const contentHome = getByTestId('home__comics');
        expect(contentHome).toBeInTheDocument();
    })
})
