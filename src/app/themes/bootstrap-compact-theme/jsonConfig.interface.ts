    export interface Config {
        project_title: string;
        theme: string;
        header_file: string;
        footer_file: string;
    }

    export interface Item {
        link: string;
        name: string;
        file: string;
    }

    export interface Menu {
        items: Item[];
    }

    export interface JsonConfig {
        config: Config;
        menu: Menu;
    }
