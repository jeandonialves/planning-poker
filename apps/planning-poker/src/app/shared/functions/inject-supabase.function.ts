import { SupabaseService } from '@shared/services/supabase/supabase.service';
import { inject } from '@angular/core';

export const injectSupabase = () => {
  const supabaseService = inject(SupabaseService);
  return supabaseService.supabase;
};
