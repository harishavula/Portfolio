        var roles = ["Frontend Developer", "React.js Developer", "TypeScript Developer", "UI Engineer"], ri = 0, ci = roles[0].length, del = true, ty = document.getElementById("ty");
        function tick() {var r = roles[ri]; ci += del ? -1 : 1; ty.textContent = r.slice(0, ci); var d = del ? 50 : 95; if (!del && ci === r.length) {del = true; d = 1800} else if (del && ci === 0) {del = false; ri = (ri + 1) % roles.length; d = 300} setTimeout(tick, d)}
        if (!matchMedia("(prefers-reduced-motion:reduce)").matches) setTimeout(tick, 1800);
        var mb = document.querySelector(".mb"), nl = document.querySelector("nav ul");
        mb.addEventListener("click", function () {var o = nl.classList.toggle("open"); mb.setAttribute("aria-expanded", o)});
        nl.addEventListener("click", function (e) {if (e.target.tagName === "A") {nl.classList.remove("open"); mb.setAttribute("aria-expanded", "false")} });
        var pg = document.getElementById("pg");
        addEventListener("scroll", function () {var m = document.documentElement.scrollHeight - innerHeight; pg.style.width = (m > 0 ? scrollY / m * 100 : 0) + "%"}, {passive: true});
        var io = new IntersectionObserver(function (es) {
            es.forEach(function (e) {
                if (!e.isIntersecting) return; var t = e.target; t.classList.add("on");
                t.querySelectorAll("[data-n]").forEach(function (c) {var n = +c.dataset.n, s = c.dataset.s || "", i = 0, h = setInterval(function () {c.textContent = (++i) + s; if (i >= n) clearInterval(h)}, n > 10 ? 40 : 150)}); io.unobserve(t)
            })
        }, {threshold: .15});
        document.querySelectorAll(".rv,h2").forEach(function (x) {io.observe(x)});
        var links = document.querySelectorAll("nav ul a"), so = new IntersectionObserver(function (es) {es.forEach(function (e) {if (e.isIntersecting) links.forEach(function (l) {l.classList.toggle("act", l.getAttribute("href") === "#" + e.target.id)})})}, {rootMargin: "-45% 0px -50% 0px"});
        document.querySelectorAll("section[id]").forEach(function (s) {so.observe(s)});
var R = "img/Harish_A.pdf";
        document.getElementById("rbtn").addEventListener("click", async function () {
            try {
                var response = await fetch(R, {cache: "no-store"});
                if (!response.ok) throw new Error("Resume PDF could not be loaded");
                var b = await response.blob();
                try {
                    var d = window.claude && await window.claude.use("downloads");
                    if (d) { await d.save({filename: "Harish_A_Resume.pdf", data: b}); return; }
                } catch (e) { if (e && e.code === "declined") return; }
                var a = document.createElement("a");
                var u = URL.createObjectURL(b);
                a.href = u;
                a.download = "Harish_A_Resume.pdf";
                a.rel = "noopener";
                a.style.display = "none";
                document.body.appendChild(a);
                a.click();
                a.remove();
                setTimeout(function () { URL.revokeObjectURL(u); }, 1000);
            } catch (e) {
                console.error("Resume download failed:", e);
                window.open(R, "_blank");
            }
        });

    // Basic shortcut deterrent only; cannot secure browser-delivered source code. -->
    (() => {
        document.addEventListener('keydown', (event) => {
            const key = (event.key || '').toLowerCase();
            const ctrlOrCmd = event.ctrlKey || event.metaKey;
            const blocked =
                key === 'f12' ||
                (ctrlOrCmd && ['u', 'i'].includes(key)) ||
                (ctrlOrCmd && event.shiftKey && ['i', 'j', 'c'].includes(key));
            if (blocked) {
                event.preventDefault();
                event.stopPropagation();
                return false;
            }
        }, true);
        document.addEventListener('contextmenu', (event) => event.preventDefault());
    })();
    