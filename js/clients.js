
/* =========================================================
   CONEXIÓN A SUPABASE
   ========================================================= */

window.sb = null;

(function () {
  const cfg = window.MONO_CONFIG;
  if (!cfg) {
    console.error("No se encontró MONO_CONFIG");
    return;
  }

  try {
    window.sb = window.supabase.createClient(cfg.SB_URL, cfg.SB_KEY, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: false
      }
    });
  } catch (e) {
    console.error("Error al crear cliente Supabase:", e);
    const loginMsg = document.getElementById("loginMsg");
    if (loginMsg) {
      loginMsg.innerHTML = '<div class="msg err">No se pudo cargar Supabase. Recarga la página.</div>';
    }
  }
})();
