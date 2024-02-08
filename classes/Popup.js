class Popup {
    constructor(title, content, html, width, height) {
        this.title = title || 'popup';
        this.content = content || null;
        this.html = html || null;
        this.width = width || 'calc(100vw - 40px)';
        this.height = height || '75vw';
    }

    embed() {
        const popup = document.createElement('div');
        popup.id = this.title;
        popup.className = 'popup';
        popup.title = this.title;
        popup.style.width = this.width;
        popup.style.height = this.height;

        const header = document.createElement('h1');
        header.textContent = this.title;

        const paragraph = document.createElement('p');
        paragraph.textContent = this.content || '';

        const customHtml = document.createElement('div');
        customHtml.innerHTML = this.html || '';

        popup.appendChild(header);
        popup.appendChild(paragraph);
        popup.appendChild(customHtml);

        return popup;
    }

    append() {
        document.body.appendChild(this.embed());
    }

    async appendAnimate() {
        this.append();
        this.element().style.animationName = 'slideIn';
    }

    getTitle() {
        return this.title;
    }

    static handleClickOutside(event) {
        let element = this.element();
        if (element) {
            let isClickInside = element.contains(event.target);
            if (!isClickInside) {
                this.end();
            }
        }
    }

    element() {
        return document.getElementById(this.title);
    }

    end() {
        if (this.element()) {
            this.element().remove();
        }
    }
}