import { Locator, Page } from '@playwright/test';

export class ConstructorPage {
    private readonly page: Page;
    private readonly uShapeCountertop: Locator;
    private readonly arrowDownCounter: Locator;
    private readonly numberCounter: Locator;
    private readonly plinthButton: Locator;
    private readonly checkSwitch: Locator;
    private readonly islandItem: Locator;
    private readonly waterDrainOption: Locator;
    private readonly colorOnix: Locator;
    private readonly calcButton: Locator;
    private readonly openReport: Locator;


    constructor(page: Page) {
        this.page = page;
        this.uShapeCountertop = page.getByTestId('countertop-type-u');
        this.plinthButton = page.getByRole('button', { name: 'Плинтус' });
        this.arrowDownCounter = page.getByTestId('countertop').getByRole('button', { name: 'arrow-down-white' });
        this.numberCounter = page.getByTestId('countertop').getByRole('button', { name: '4' });
        this.checkSwitch = page.getByRole('img', { name: 'toggle' });
        this.islandItem = page.locator('[data-testid="product-item"]').getByText('Остров');
        this.waterDrainOption = page.locator('[data-testid="options-item"]').getByText('Проточки для стока воды');
        this.colorOnix = page.locator('[data-testid="stone-block"]').getByText('N-103 Gray Onix');
        this.calcButton = page.getByTestId('calc-button');
        this.openReport = page.getByTestId('open-report-button');

    }

    async clickCounterTop() {
    await this.uShapeCountertop.click();
    }

    async clickPlinth() {
    await this.plinthButton.click();
    }

    async clickArrowDown() {
        await this.arrowDownCounter.click();
        await this.numberCounter.click();
    }

    async clickSwitch() {
        await this.checkSwitch.click();
    }

    async selectIsland() {
        await this.islandItem.click();
    }

    async selectWaterDrain() {
        await this.waterDrainOption.click();
    }

    async selectColorOnix() {
        await this.colorOnix.click();
    }

    async clickCalculate() {
        await this.calcButton.click();
    }

    async clickReport() {
        await this.openReport.click()
    }
}