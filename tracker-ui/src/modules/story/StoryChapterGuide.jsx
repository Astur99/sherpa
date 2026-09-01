import { storyChapterIntel, storyChapters } from './storyChapters';
import { useState } from 'react';

export default function StoryChapterGuide({ language }) {
  const spanish = String(language || '').startsWith('es');
  const [selectedId, setSelectedId] = useState(storyChapters[0].id);
  const [view, setView] = useState('overview');
  const selectedChapter = storyChapters.find((chapter) => chapter.id === selectedId) || storyChapters[0];
  const chapterIntel = storyChapterIntel[selectedChapter.id] || { checklistEs: [], notesEs: [] };
  const detailSteps = chapterIntel.fullStepsEs || selectedChapter.stepsEs;
  const copy = spanish
    ? { eyebrow: 'RUTAS NARRATIVAS', title: 'Capítulos de la historia', body: 'Selecciona una ficha para abrir su guía interna. Las decisiones irreversibles se consultan en la pestaña Decisiones y finales.', maps: 'Mapas', decision: 'Incluye decisión', guide: 'ABRIR GUÍA FUENTE ↗', source: 'Guías redactadas desde cero a partir de información pública de Tarkov Help; revísalas tras cada parche.', steps: 'Guía paso a paso', sourceNote: 'Contrasta ubicaciones, requisitos y cambios recientes en la guía fuente.', open: 'ABRIR GUÍA', back: '← VOLVER A CAPÍTULOS', prep: 'Preparación', warning: 'Atención', checklist: 'Checklist de preparación', notes: 'Puntos clave de la ruta', branches: 'Ramas y finales', screenshots: 'Capturas de referencia' }
    : { eyebrow: 'NARRATIVE ROUTES', title: 'Story chapters', body: 'Select a card to open its internal guide. Review irreversible choices in the Decisions and endings tab.', maps: 'Maps', decision: 'Contains a decision', guide: 'OPEN SOURCE GUIDE ↗', source: 'Guides are originally written from public Tarkov Help information; recheck them after each patch.', steps: 'Step-by-step guide', sourceNote: 'Check the source guide for locations, requirements and recent changes.', open: 'OPEN GUIDE', back: '← BACK TO CHAPTERS', prep: 'Preparation', warning: 'Warning', checklist: 'Preparation checklist', notes: 'Route notes', branches: 'Branches and endings', screenshots: 'Reference screenshots' };

  if (view === 'detail') {
    return (
      <section style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid var(--tk-glass-border)', borderRadius: '14px', padding: 'clamp(1.1rem, 3vw, 2rem)' }}>
        <button type="button" onClick={() => setView('overview')} style={{ background: 'transparent', border: 0, color: 'var(--tk-green)', cursor: 'pointer', fontWeight: 800, padding: 0 }}>{copy.back}</button>
        <div style={{ marginTop: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '1.25rem' }}>
          <span style={{ color: 'var(--tk-green)', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '1.2px' }}>{copy.steps}</span>
          <h3 style={{ color: '#fff', fontSize: 'clamp(1.55rem, 4vw, 2.15rem)', margin: '0.4rem 0 0.65rem' }}>{spanish ? selectedChapter.titleEs : selectedChapter.title}</h3>
          <p style={{ color: 'var(--tk-text-muted)', lineHeight: 1.55, margin: 0, maxWidth: '850px' }}>{spanish ? selectedChapter.summaryEs : selectedChapter.summary}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.85rem', margin: '1.25rem 0' }}>
          <div style={{ background: 'rgba(255,255,255,0.035)', borderRadius: '8px', padding: '0.9rem' }}><span style={{ color: 'rgba(255,255,255,0.48)', fontSize: '0.72rem', fontWeight: 800 }}>{copy.prep}</span><p style={{ color: '#fff', margin: '0.35rem 0 0', fontSize: '0.9rem' }}>{selectedChapter.maps.join(' · ')}</p></div>
          {selectedChapter.decision && <div style={{ background: 'rgba(255,170,0,0.08)', borderRadius: '8px', padding: '0.9rem' }}><span style={{ color: '#ffcf66', fontSize: '0.72rem', fontWeight: 800 }}>{copy.warning}</span><p style={{ color: '#fff', margin: '0.35rem 0 0', fontSize: '0.9rem' }}>{spanish ? 'Esta ruta contiene una elección que afecta el progreso posterior.' : 'This route contains a choice that affects later progression.'}</p></div>}
        </div>
        <ol style={{ color: 'var(--tk-text-muted)', lineHeight: 1.65, margin: '1.5rem 0', paddingLeft: '1.4rem', display: 'grid', gap: '1rem' }}>
          {detailSteps.map((step, index) => <li key={step}><strong style={{ color: '#fff' }}>{String(index + 1).padStart(2, '0')}.</strong> {step}</li>)}
        </ol>
        {chapterIntel.screenshots?.length > 0 && <section style={{ margin: '0 0 1.35rem' }}>
          <h4 style={{ color: '#fff', margin: '0 0 0.85rem' }}>{copy.screenshots}</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '0.75rem' }}>
            {chapterIntel.screenshots.map((url, index) => <a key={url} href={url} target="_blank" rel="noreferrer" title={`${copy.screenshots} ${index + 1}`} style={{ borderRadius: '9px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.12)', display: 'block', background: '#101010' }}><img src={url} alt={`${spanish ? selectedChapter.titleEs : selectedChapter.title} — ${copy.screenshots} ${index + 1}`} loading="lazy" style={{ display: 'block', width: '100%', aspectRatio: '16 / 10', objectFit: 'cover' }} /></a>)}
          </div>
        </section>}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1rem', marginBottom: '1.35rem' }}>
          <div style={{ background: 'rgba(26,176,21,0.06)', border: '1px solid rgba(26,176,21,0.25)', borderRadius: '10px', padding: '1rem' }}>
            <h5 style={{ color: '#fff', fontSize: '0.95rem', margin: '0 0 0.65rem' }}>{copy.checklist}</h5>
            <ul style={{ color: 'var(--tk-text-muted)', lineHeight: 1.5, margin: 0, paddingLeft: '1.1rem', display: 'grid', gap: '0.45rem' }}>{chapterIntel.checklistEs.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div style={{ background: 'rgba(255,207,102,0.05)', border: '1px solid rgba(255,207,102,0.22)', borderRadius: '10px', padding: '1rem' }}>
            <h5 style={{ color: '#fff', fontSize: '0.95rem', margin: '0 0 0.65rem' }}>{copy.notes}</h5>
            <ul style={{ color: 'var(--tk-text-muted)', lineHeight: 1.5, margin: 0, paddingLeft: '1.1rem', display: 'grid', gap: '0.45rem' }}>{chapterIntel.notesEs.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </div>
        {chapterIntel.branchesEs && <section style={{ marginBottom: '1.35rem' }}>
          <h4 style={{ color: '#fff', margin: '0 0 0.85rem' }}>{copy.branches}</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '0.85rem' }}>
            {chapterIntel.branchesEs.map((branch) => <article key={branch.title} style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '9px', padding: '1rem' }}><h5 style={{ color: '#ffcf66', margin: '0 0 0.55rem' }}>{branch.title}</h5><ol style={{ color: 'var(--tk-text-muted)', lineHeight: 1.45, margin: '0 0 0.8rem', paddingLeft: '1.05rem', display: 'grid', gap: '0.35rem' }}>{branch.steps.map((step) => <li key={step}>{step}</li>)}</ol><a href={branch.url} target="_blank" rel="noreferrer" style={{ color: 'var(--tk-green)', fontSize: '0.78rem', fontWeight: 800, textDecoration: 'none' }}>{copy.guide}</a></article>)}
          </div>
        </section>}
        <p style={{ color: 'rgba(255,255,255,0.48)', fontSize: '0.82rem', margin: '0 0 0.7rem' }}>{copy.sourceNote}</p>
        <a href={selectedChapter.guideUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--tk-green)', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.6px', textDecoration: 'none' }}>{copy.guide}</a>
      </section>
    );
  }

  return (
    <section>
      <div style={{ marginBottom: '1.75rem' }}>
        <span style={{ color: 'var(--tk-green)', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '1.4px' }}>{copy.eyebrow}</span>
        <h3 style={{ color: '#fff', fontSize: '1.65rem', margin: '0.3rem 0 0.65rem' }}>{copy.title}</h3>
        <p style={{ color: 'var(--tk-text-muted)', lineHeight: 1.5, margin: 0, maxWidth: '820px' }}>{copy.body}</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(285px, 1fr))', gap: '1rem' }}>
        {storyChapters.map((chapter, index) => (
          <article key={chapter.id} style={{ background: selectedId === chapter.id ? 'rgba(26,176,21,0.07)' : 'var(--tk-glass)', border: `1px solid ${selectedId === chapter.id ? 'var(--tk-green)' : 'var(--tk-glass-border)'}`, borderRadius: '12px', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.75rem', alignItems: 'center' }}>
              <span style={{ color: 'var(--tk-green)', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '1px' }}>CAP. {String(index + 1).padStart(2, '0')}</span>
              {chapter.decision && <span style={{ color: '#ffcf66', fontSize: '0.72rem', fontWeight: 700 }}>{copy.decision}</span>}
            </div>
            <h4 style={{ color: '#fff', fontSize: '1.15rem', margin: 0 }}>{spanish ? chapter.titleEs : chapter.title}</h4>
            <p style={{ color: 'var(--tk-text-muted)', lineHeight: 1.45, margin: 0, flex: 1 }}>{spanish ? chapter.summaryEs : chapter.summary}</p>
            <div><span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.72rem', fontWeight: 700 }}>{copy.maps}: </span><span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.82rem' }}>{chapter.maps.join(' · ')}</span></div>
            <button type="button" onClick={() => { setSelectedId(chapter.id); setView('detail'); }} style={{ alignSelf: 'flex-start', background: 'transparent', border: 0, color: 'var(--tk-green)', cursor: 'pointer', fontWeight: 800, fontSize: '0.78rem', letterSpacing: '0.6px', padding: 0 }}>{copy.open} →</button>
          </article>
        ))}
      </div>
      <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', marginTop: '1.3rem' }}>{copy.source}</p>
    </section>
  );
}
