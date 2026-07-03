/* eslint-disable */
/* NISE — App entry */

const { useEffect: useE } = React;

function App() {
  const defaults = window.__NISE_DEFAULTS;
  const [t, setTweak] = useTweaks(defaults);

  // Apply to document root
  useE(() => {
    const r = document.documentElement;
    r.setAttribute('data-accent',  t.accent);
    r.setAttribute('data-pattern', t.pattern);
    r.setAttribute('data-motion',  t.motion);
  }, [t.accent, t.pattern, t.motion]);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Problem />
        <Solution />
        <Services />
        <Why />
        <Process />
        <Masjid />
        <Portfolio />
        <Team />
        <Support />
        <Vision />
        <CTA />
      </main>
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Brand accent" />
        <TweakRadio
          label="Palette"
          value={t.accent}
          options={[
            { value: 'deepgreen', label: 'Deep' },
            { value: 'emerald',   label: 'Emerald' },
            { value: 'navy',      label: 'Navy' },
          ]}
          onChange={(v) => setTweak('accent', v)}
        />

        <TweakSection label="Islamic pattern" />
        <TweakRadio
          label="Background"
          value={t.pattern}
          options={[
            { value: 'off',     label: 'Off' },
            { value: 'subtle',  label: 'Subtle' },
            { value: 'visible', label: 'Visible' },
          ]}
          onChange={(v) => setTweak('pattern', v)}
        />

        <TweakSection label="Motion" />
        <TweakRadio
          label="Animation"
          value={t.motion}
          options={[
            { value: 'calm',   label: 'Calm' },
            { value: 'snappy', label: 'Snappy' },
            { value: 'off',    label: 'Off' },
          ]}
          onChange={(v) => setTweak('motion', v)}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
